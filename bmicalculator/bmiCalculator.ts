interface BMIValues {
	height: number;
	weight: number;
  }
  
  const parseArguments = (args: string[]): BMIValues => {
	if (args.length < 4) throw new Error('Not enough arguments');
	if (args.length > 4) throw new Error('Too many arguments');
  
	if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
	  return {
		height: Number(args[2]),
		weight: Number(args[3])
	  }
	} else {
	  throw new Error('Provided values were not numbers!');
	}
  }

const bmiCategory = (bmi: number): string => {
	switch (true) {
		case bmi < 18.5 && bmi > 1:
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
	const { height, weight } = parseArguments(process.argv)
	console.log(bmiCalculator(height, weight));
} catch (error: unknown) {
	let errorMessage = 'Something bad happened.'
	if (error instanceof Error) {
		errorMessage += ' Error: ' + error.message;
	}
	console.log(errorMessage);
}