interface CoursePart {
  exerciseCount: number;
}

const Total: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <p>Number of exercises: {totalExercises}</p>
  );
};

export default Total;
