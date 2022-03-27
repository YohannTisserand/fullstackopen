import diagnoseEntries from "../data/diagnose";
import { NonSensitiveDiagnoseEntry, DiagnoseEntry } from "../types";

const getEntries = (): Array<DiagnoseEntry> => {
  return diagnoseEntries;
};

const getNonSensitiveEntries = (): NonSensitiveDiagnoseEntry[] => {
  return diagnoseEntries.map(({ code, name }) => ({
    code,
    name
  }));
};

export default { getEntries, getNonSensitiveEntries };