import data from '../data/patients';
import express from 'express';
import cors from 'cors';

const patientsRouter = express.Router();

type patients = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
};

type patientsSimple = Omit<patients, 'ssn'>;

// Enable CORS for all routes on this router
patientsRouter.use(cors());

patientsRouter.get('/api/patients', (_req, res) => {
    const simplePatients = data.map(({ ssn: _, ...rest }) => rest);
    res.send(simplePatients as patientsSimple[]);
});

export default patientsRouter;