import express from 'express';
import data from './data/diagnoses';

const app = express();
app.use(express.json());

const PORT = 3001;

type Diagnosis = {
  code: string;
  name: string;
  latin?: string;

};

app.get('/api/ping', (_req, res) => {
  res.set('Acces-Control-Allow-Origin', 'http://localhost:3000');
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.set('Acces-Control-Allow-Origin', 'http://localhost:3000');
  res.send(data as Diagnosis[]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});