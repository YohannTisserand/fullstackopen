export type Diagnose = 'code' | 'name' | 'latin';

export type Patient = 'id' | 'name' | 'dateOfBirth' | 'ssn' | 'gender' | 'occupation';

// export type Gender = 'male' | 'female' | 'non-binary';
export enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non-binary'
}

export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string
}

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;

}

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;

export type NewPatient = Omit<PatientEntry, 'id'>;