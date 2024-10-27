export interface UserCompanyData {
  userId: string;
  companyId: string;
  positionOfInterest?: string;
  personOfInterest?: string;
  resumeSubmitted?: boolean;
  interviewScheduled?: Date;
  followUpActions?: string;
  notes?: string;
}
