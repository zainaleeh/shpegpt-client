import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss'],
})
export class CompanyDialogComponent {
  companyForm: FormGroup;
  companyDetailsPanelState = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public company: any,
    public dialogRef: MatDialogRef<CompanyDialogComponent>,
    private formBuilder: FormBuilder
  ) {
    this.companyForm = this.formBuilder.group({
      _id: [this.company._id || ''],
      position: [this.company.position || ''],
      contact: [this.company.contact || ''],
      resumeSubmitted: [this.company.resumeSubmitted || false],
      interviewScheduled: [
        this.company.interviewScheduled
          ? new Date(this.company.interviewScheduled)
          : '',
      ],
      notes: [this.company.notes || ''],
      interactionScore: [this.company.interactionScore || 0],
      sponsor: [this.company.sponsor ? true : false],
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      this.dialogRef.close(this.companyForm.value);
    }
  }
}
