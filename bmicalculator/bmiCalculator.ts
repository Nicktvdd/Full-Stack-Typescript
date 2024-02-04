const bmiCategory = (bmi: number): string => {
	switch (true) {
		case bmi < 18.5:
			return 'Underweight';
		case bmi >= 18.5 && bmi < 24.9:
			return 'Normal (healthy weight)';
		case bmi >= 25 && bmi < 29.9:
			return 'Overweight';
		case bmi >= 30:
			return 'Obese';
		default:
			return 'Invalid BMI'
	}
}

const bmiCalculator = (height: number, weight: number): string => {
	const bmi = (weight / (height * height)) * 10000;
	console.log('bmi: ', bmi )
	return (bmiCategory(bmi));
}

try {
	console.log(bmiCalculator(180, 74));
} catch (error: unknown) {
	let errorMessage = 'Something bad happened.'
	if (error instanceof Error) {
		errorMessage += ' Error: ' + error.message;
	}
	console.log(errorMessage);
}