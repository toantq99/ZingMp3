import React from "react";

const LineChart = () => {
	return (
		<Line
			data={generateData(data.slice(0, 3))}
			options={options}
			height={100}
		/>
	);
};

export default LineChart;
