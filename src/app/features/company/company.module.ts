import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { CompanyGridComponent } from './components/company-grid/company-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { CoreModule } from 'src/app/core/core.module';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    CompanyPageComponent,
    CompanyGridComponent,
    CompanyDialogComponent,
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    CoreModule,
    AgGridModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSliderModule,
  ],
})
export class CompanyModule {}
