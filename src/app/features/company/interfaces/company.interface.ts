export interface Company {
  _id: string;
  name?: string;
  industry?: string;
  booth?: number;
  position?: string;
  contact?: string;
  resumeSubmitted?: boolean;
  interviewScheduled?: string;
  interactionScore?: number;
  notes?: string;
}

export interface UserCompany {
  companyId: Company;
  position?: string;
  contact?: string;
  resumeSubmitted?: boolean;
  interviewScheduled?: string;
  interactionScore?: number;
  sponsor?: boolean;
  notes?: string;
}
