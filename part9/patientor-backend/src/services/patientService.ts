import { uuid } from 'uuidv4';
import patientEntries from "../data/patients";
import { PatientEntry, NewPatient } from "../types";

const getEntries = (): Array<PatientEntry> => {
  return patientEntries;
};

const findById = (id: string): PatientEntry | undefined => {
  const entry = patientEntries.find(d => d.id === id);
  return entry;
};

const addPatient = (patient: NewPatient): PatientEntry => {
  const addedPatient = {
    id: uuid(),
    ...patient
  };
  patientEntries.push(addedPatient);
  return addedPatient;
};

export default { getEntries, findById, addPatient };