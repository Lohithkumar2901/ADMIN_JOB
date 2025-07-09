import { IsString, IsDateString, IsNumber } from 'class-validator';

export class CreateJobDto {
  @IsString()
  jobTitle: string;

  @IsString()
  companyName: string;

  @IsString()
  location: string;

  @IsString()
  jobType: string;

  @IsNumber()
  minSalary: number;

  @IsNumber()
  maxSalary: number;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsString()
  responsibilities: string;

  @IsDateString()
  applicationDeadline: string;
}
