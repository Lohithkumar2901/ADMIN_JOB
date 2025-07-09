export interface Job {
  id?: number;
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  minSalary: number;
  maxSalary: number;
  jobDescription: string;
  requirements: string;
  responsibilities: string;
  applicationDeadline: string;
}