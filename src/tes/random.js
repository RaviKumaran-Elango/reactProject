import React, { useState } from "react";

const Randombutton = () => {
	const [num, setNum] = useState(0);

	const randomNumberInRange = (min, max) => {
		return Math.floor(Math.random()
			* (max - min + 1)) + min;
	};

	const handleClick = () => {
		setNum(randomNumberInRange(1, 12));
	};

	return (
		<div>
			<h2>Number is: {num}</h2>
			<button onClick={handleClick}>
				Click Me Generate
			</button>
		</div>
	);
};

export default Randombutton;
