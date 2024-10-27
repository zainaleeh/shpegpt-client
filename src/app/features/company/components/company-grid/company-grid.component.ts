import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';

@Component({
  selector: 'app-company-grid',
  templateUrl: './company-grid.component.html',
  styleUrls: ['./company-grid.component.scss'],
})
export class CompanyGridComponent implements OnDestroy {
  @Input() companies: any = [];
  @Output() onUserCompanyUpdate = new EventEmitter<any>();

  private ngDestroy$ = new Subject<void>();

  public rowData: any = [];
  public columnDefs: ColDef[] = this.getColumnDefs();
  public defaultColDef: ColDef = this.getDefaultColDef();
  public gridOptions = {
    onCellClicked: this.onCellClicked.bind(this),
  };

  constructor(private dialog: MatDialog) {}

  ngOnChanges(): void {
    this.rowData = this.companies;
  }

  onCellClicked(params: any): void {
    this.dialog
      .open(CompanyDialogComponent, {
        data: params.data,
      })
      .afterClosed()
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe((result) => {
        if (result) this.onUserCompanyUpdate.emit(result);
      });
  }

  getColumnDefs(): ColDef[] {
    return [
      {
        headerName: 'Company',
        field: 'name',
        cellStyle: { fontWeight: 'bold' },
      },
      {
        headerName: 'Booth',
        field: 'booth',
        width: 90,
        cellStyle: { fontWeight: 'bold' },
      },
      { headerName: 'Resume', field: 'resumeSubmitted', width: 105 },
      {
        headerName: 'Sponsor Y/N',
        field: 'sponsorData',
        width: 130,
        valueFormatter: (params) => {
          const yesCount = params.value?.yes || 0;
          const noCount = params.value?.no || 0;
          return `${yesCount}/${noCount}`;
        },
        cellStyle: (params) => {
          const yesCount = params.value?.yes || 0;
          const noCount = params.value?.no || 0;
          if (yesCount > noCount) {
            return { color: 'green', fontWeight: 'bold' };
          } else {
            return { color: 'red', fontWeight: 'bold' };
          }
        },
      },
      { headerName: 'Position', field: 'position' },
      { headerName: 'Contact', field: 'contact' },
      { headerName: 'Interview Scheduled', field: 'interviewScheduled' },
      { headerName: 'Interaction Score', field: 'interactionScore' },
      { headerName: 'Notes', field: 'notes' },
      { headerName: 'Global Intraction Score', field: 'score', width: 90 },
    ];
  }

  getDefaultColDef(): ColDef {
    return { sortable: true, resizable: true, filter: true };
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
