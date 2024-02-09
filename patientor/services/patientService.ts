import data from "../data/patients";
import { v1 as uuid } from "uuid";
import { Gender, Patient } from "../types/Patient";

const patientData: Patient[] = data.map(patient => ({
	...patient,
	gender: patient.gender as Gender
}));

const addPatient = (
	name: string,
	dateOfBirth: string,
	ssn: string,
	gender: Gender,
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
