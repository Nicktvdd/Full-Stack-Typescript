import data from '../../../data/diagnoses';
import express from 'express';
import cors from 'cors';
import Diagnosis from '../../types/Diagnosis';

const diagnosesRouter = express.Router();


// Enable CORS for all routes on this router
diagnosesRouter.use(cors());

diagnosesRouter.get('/api/diagnoses', (_req, res) => {
  res.send(data as Diagnosis[]);
});

export default diagnosesRouter;