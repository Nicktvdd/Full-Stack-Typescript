import express from 'express';
import diagnosesRouter from './routes/diagnoses';
import pingRouter from './routes/ping';
export const app = express();

app.use(express.json());

const PORT = 3001;

app.use(diagnosesRouter);
app.use(pingRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});