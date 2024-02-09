import { NewPatientEntry, Gender } from '../types/Patient';

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

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }
  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newEntry: NewPatientEntry = {
      name: parseString(object.name),
      dateOfBirth: parseString(object.dateOfBirth),
      ssn: parseString(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation),
    };
    return newEntry;
  }
  throw new Error('Incorrect data: a field missing');
};

export default toNewPatientEntry;