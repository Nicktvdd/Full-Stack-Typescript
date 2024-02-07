import data from '../data/diagnoses';
import Diagnosis from '../data/diagnoses';
import express from 'express';
const diagnosesRouter = express.Router();

type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

diagnosesRouter.get('/api/diagnoses', (_req, res) => {
  res.set('Acces-Control-Allow-Origin', 'http://localhost:3000');
  res.send(data as Diagnosis[]);
});

export default diagnosesRouter;