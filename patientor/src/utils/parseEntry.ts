import { Entry, BaseEntry } from '../types/Patient';
import { isString } from './newPatient';
import Diagnosis from '../types/Diagnosis';

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDiagnosis = (
  diagnosisCodes: unknown
): diagnosisCodes is Array<Diagnosis['code']> => {
  return (diagnosisCodes as Array<Diagnosis['code']>).every((diagnosisCode: unknown) => isString(diagnosisCode));
};

const isNewBaseEntry = (entry: BaseEntry): entry is BaseEntry => {
  if (entry.diagnosisCodes) {
    if (!parseDiagnosis(entry.diagnosisCodes)) {
      throw new Error(`Incorrect Diagnosis Code ${entry.diagnosisCodes}`);
    }
  }
  if (
    !entry ||
    !isString(entry.description) ||
    !isDate(String(entry.date)) ||
    !isString(entry.specialist)
  ) {
    throw new Error('Incorrect description, date or specialist');
  }
  return true;
};

const checkRequiredFields = (entries: Entry[]): boolean => {
  if (!entries) {
    return false;
  }
  if (entries.length === 0) {
    return false;
  }
  if (!entries.every(isNewBaseEntry)) {
    return false;
  }
  if (!entries.every(entry => isString(entry.type))) {
    return false;
  }
  if (!entries.every(entry => Array.isArray(entry.diagnosisCodes))) {
    return false;
  }
  if (!entries.every(entry => isString(entry.description))) {
    return false;
  }
  if (!entries.every(entry => isDate(entry.date))) {
    return false;
  }
  if (!entries.every(entry => isString(entry.specialist))) {
    return false;
  }
  if (!entries.every(entry => entry.diagnosisCodes === undefined
    || parseDiagnosis(entry.diagnosisCodes))) {
    return false;
  }
  if (!entries.every(entry => entry.type === "Hospital"
    || entry.type === "OccupationalHealthcare"
    || entry.type === "HealthCheck")) {
    return false;
  }
  if (!entries.every(entry => entry.type === "Hospital" ? isString(entry.discharge.date)
    && isString(entry.discharge.criteria) : true)) {
    return false;
  }
  if (!entries.every(entry => entry.type === "OccupationalHealthcare" ? isString(entry.employerName)
    && (entry.sickLeave === undefined || (isString(entry.sickLeave.startDate)
      && isString(entry.sickLeave.endDate))) : true)) {
    return false;
  }
  if (!entries.every(entry => entry.type === "HealthCheck"
    ? [0, 1, 2, 3].includes(entry.healthCheckRating) : true)) {
    return false;
  }
  if (!entries.every(entry => entry.diagnosisCodes === undefined
    || entry.diagnosisCodes.every(isString))) {
    return false;
  }
  if (!entries.every(entry => entry.diagnosisCodes === undefined
    || entry.diagnosisCodes.every(code => code.length > 0))) {
    return false;
  }
  else {
    return true;
  }

};

export default checkRequiredFields;
