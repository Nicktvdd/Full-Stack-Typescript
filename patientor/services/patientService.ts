import data from "../data/patients";
import { Patient } from "../types/Patient";
import { v1 as uuid } from "uuid";

const patientData: Patient[] = data;

const addPatient = (
	name: string,
	dateOfBirth: string,
	ssn: string,
	gender: string,
	occupation: string
): Patient => {
	const newPatient = {
		id: uuid(),
		name,
		dateOfBirth,
		ssn,
		gender,
		occupation
	};
	patientData.push(newPatient);
	return newPatient;
};

export default addPatient;
