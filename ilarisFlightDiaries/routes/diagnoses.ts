import data from '../data/diagnoses';
import express from 'express';
import cors from 'cors';

const diagnosesRouter = express.Router();

type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

// Enable CORS for all routes on this router
diagnosesRouter.use(cors());

diagnosesRouter.get('/api/diagnoses', (_req, res) => {
  res.send(data as Diagnosis[]);
});

export default diagnosesRouter;