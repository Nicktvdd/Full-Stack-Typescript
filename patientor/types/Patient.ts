export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[]
};

export type NewPatientEntry = Omit<Patient, 'id'>;
export type NonSensitivePatientData = Omit<Patient, 'ssn' | 'entries'>;