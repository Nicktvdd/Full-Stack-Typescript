import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';
const app = express();

app.get('/ping', (_req: Request, res: Response) => {
	res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
	res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response) => {
	const height = Number(req.query.height);
	const weight = Number(req.query.weight);

	if (isNaN(height) || isNaN(weight)) {
		res.status(400).send('malformatted parameters');
		return;
	}

	const bmi = calculateBmi(height, weight);
	res.json({ height, weight, bmi });
});



const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});