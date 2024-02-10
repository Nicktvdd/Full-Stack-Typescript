interface CoursePart {
	name: string;
	exerciseCount: number;
}

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
	return (
		<div>
			{courseParts.map((part: CoursePart, index: number) => (
				<p key={index}>
					{part.name} {part.exerciseCount}
				</p>
			))}
		</div>
	);
};

export default Content;