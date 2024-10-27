import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { Company, UserCompany } from '../../interfaces/company.interface';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent {
  companies: Company[] = [];
  allCompanies: Company[] = [];

  private ngDestroy$ = new Subject<void>();

  constructor(private companyService: CompanyService) {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      companies: this.companyService
        .getCompanies()
        .pipe(takeUntil(this.ngDestroy$)),
      userCompanies: this.companyService
        .getUserCompanies()
        .pipe(takeUntil(this.ngDestroy$)),
    }).subscribe(({ companies, userCompanies }) => {
      this.allCompanies = companies;
      this.companies = this.mergeCompanyData(companies, userCompanies);
    });
  }

  mergeCompanyData(
    allCompanies: Company[],
    userCompanies: UserCompany[]
  ): Company[] {
    const userCompaniesMap = new Map(
      userCompanies.map((uc) => [uc.companyId._id, uc])
    );
    return allCompanies.map((company) => {
      const userCompany = userCompaniesMap.get(company._id);
      return {
        ...company,
        ...userCompany?.companyId,
        position: userCompany?.position,
        contact: userCompany?.contact,
        resumeSubmitted: userCompany?.resumeSubmitted,
        interviewScheduled: userCompany?.interviewScheduled,
        interactionScore: userCompany?.interactionScore,
        sponsor: userCompany?.sponsor,
        notes: userCompany?.notes,
      };
    });
  }

  onUserCompanyUpdate(data: Company): void {
    this.companyService
      .updateUserCompany(data._id, data)
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(() => {
        this.loadData();
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
