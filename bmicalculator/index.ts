import express, { Request, Response } from 'express';
import calculateBmi from './bmiCalculator';
import exerciseCalculator from './exerciseCalculator';

const app = express();
app.use(express.json()); // Add this line to parse JSON in the request body

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

app.post('/exercises', (req: Request, res: Response) => {
	const exercises: number[] = req.body.daily_exercises;
	const target: number = req.body.target;

	if (!exercises || !target) {
		res.status(400).json({ error: 'parameters missing' });
		return;
	}

	if (!Array.isArray(exercises) || isNaN(Number(target))) {
		res.status(400).json({ error: 'malformatted parameters' });
		return;
	}

	const parsedExercises: number[] = exercises
		.filter((e: number | undefined) => typeof e === 'number')
		.map((e: number) => e);

	const result = exerciseCalculator(parsedExercises, Number(target));
	res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});