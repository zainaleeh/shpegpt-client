import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company, UserCompany } from '../interfaces/company.interface';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.API_URL}/company`);
  }

  public getUserCompanies(): Observable<UserCompany[]> {
    return this.http.post<UserCompany[]>(`${this.API_URL}/users/companies`, {
      email: localStorage.getItem('email'),
    });
  }

  public updateUserCompany(companyId: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/users/companies/${companyId}`, {
      email: localStorage.getItem('email'),
      data,
    });
  }
}
