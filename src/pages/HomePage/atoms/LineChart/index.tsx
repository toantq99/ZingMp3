// Libs
import React from "react";
import { Line } from "react-chartjs-2";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// Mocks
import { generateData, options } from "@mocks/chart";

const LineChart: React.FC<{ data: TrackDetail[] }> = ({ data }) => {
	return (
		<Line
			data={generateData(data.slice(0, 3))}
			options={options}
			height={100}
		/>
	);
};

export default LineChart;
