interface Values {
	periodLength: number;
	trainingDays: number;
	success: boolean;
	rating: number;
	ratingDescription: string;
	target: number;
	average: number;
  }
  
  const exerciseCalculator= (hoursPerDay: number[]) => {
	let totalHours: number = 0;
	let trainingDays = 0;
	let success = false;
	let rating = 1;
	let ratingDescription = "It has to be better, you can do it!";
	const target = 2;
	const periodLength = hoursPerDay.length;

	for (let i = 0; i < periodLength; i++) {
		totalHours += hoursPerDay[i];
		if (hoursPerDay[i] != 0)
			trainingDays++;
	}
	const averageHours = totalHours / periodLength;

	if (averageHours >= (averageHours / 2)) {
		rating++;
		ratingDescription = "Not too bad, but could be better";
	}
	if (averageHours >= target) {
		success = true;
		rating++;
		ratingDescription = "Amazing, you did it!";
	}
	const summary: Values = {
		periodLength: periodLength,
		trainingDays: trainingDays,
		success: success,
		rating: rating,
		ratingDescription: ratingDescription,
		target: target,
		average: averageHours
	}
	return summary;

  }
  
  try {
	const hoursPerDay: number[] = [3, 0, 2, 4.5, 0, 3, 1];
	console.log(exerciseCalculator(hoursPerDay));
  } catch (error: unknown) {
	let errorMessage = 'Something bad happened.'
	if (error instanceof Error) {
	  errorMessage += ' Error: ' + error.message;
	}
	console.log(errorMessage);
  }