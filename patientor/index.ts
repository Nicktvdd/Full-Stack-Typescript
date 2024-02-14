import express from 'express';
import diagnosesRouter from './src/routes/diagnoses';
import pingRouter from './src/routes/ping';
import patientsRouter from './src/routes/patients';
export const app = express();

app.use(express.json());

const PORT = 3001;

app.use(diagnosesRouter);
app.use(pingRouter);
app.use(patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});