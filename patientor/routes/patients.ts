import data from '../data/patients';
import express from 'express';
import cors from 'cors';
import { v1 as uuid } from 'uuid';
import { Patient } from '../types/Patient';
import toNewPatientEntry from '../utils/newPatient';

const patientsRouter = express.Router();

type patientSimple = Omit<Patient, 'ssn'>;

// Enable CORS for all routes on this router
patientsRouter.use(cors());

patientsRouter.get('/api/patients', (_req, res) => {
    const simplePatients = data.map(({ ssn: _, ...rest }) => rest);
    res.send(simplePatients as patientSimple[]);
});

patientsRouter.post('/api/patients', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        const newPatient = {
            id: uuid(),
            ...newPatientEntry
        };
        data.push(newPatient);
        res.json(newPatient);
    } catch (error: unknown) {
        let errorMessage = 'An error occurred';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        res.status(400).send(errorMessage);
    }

});

export default patientsRouter;