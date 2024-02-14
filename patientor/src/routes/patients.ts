import data from '../../data/patients';
import express from 'express';
import cors from 'cors';
import { v1 as uuid } from 'uuid';
import { Patient, Entry } from '../types/Patient';
import toNewPatientEntry from '../utils/newPatient';
import parseEntry from '../utils/parseEntry';

const patientsRouter = express.Router();

type patientSimple = Omit<Patient, 'ssn'>;

// Enable CORS for all routes on this router
patientsRouter.use(cors());

patientsRouter.get('/api/patients', (_req, res) => {
    const simplePatients = data.map(({ ssn: _, ...rest }) => rest);
    res.send(simplePatients as patientSimple[]);
});

patientsRouter.get('/api/patients/:id', (req, res) => {
    const id = req.params.id;
    const patient = data.find(p => p.id === id);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send('Patient not found');
    }
});

patientsRouter.post('/api/patients/:id/entries', (req, res) => {
    const id = req.params.id;
    const patient = data.find(p => p.id === id);

    if (patient) {
        try {
            const newEntry: Entry[] = [req.body as Entry];
            parseEntry(newEntry);
            const newPatient = {
                ...patient,
                entries: patient.entries.concat(newEntry)
            };
            res.json(newPatient);
        } catch (error: unknown) {
            let errorMessage = 'An error occurred';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            res.status(400).send(errorMessage);
        }
    } else {
        res.status(404).send('Patient not found');
    }
});

patientsRouter.post('/api/patients', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body as Patient);
        const newPatient = {
            id: uuid(),
            ...newPatientEntry,
            entries: [] as never[]
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