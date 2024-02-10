import { NewPatientEntry, Gender, Patient } from '../types/Patient';

const isString = (text: unknown): text is string => {
	return typeof text === 'string' || text instanceof String;
};

const parseString = (content: unknown): string => {
	if (!isString(content)) {
		throw new Error('Incorrect or missing content');
	}
	return content;
};

const isGender = (param: unknown): param is Gender => {
  return param === 'male' || param === 'female' || param === 'other';
};

const parseGender = (gender: unknown): Gender => {
  if (!isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const toNewPatientEntry = (object: Patient): NewPatientEntry => {
  if (!object || !object.name || !object.dateOfBirth || !object.ssn || !object.gender || !object.occupation) {
    throw new Error('Incorrect or missing data');
  }
  const newEntry: NewPatientEntry = {
    name: parseString(object.name),
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
  };
  return newEntry;
};

export default toNewPatientEntry;