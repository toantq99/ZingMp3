import { SongDetail } from "../constants/types/songDetailTypes";

const hourArr: number[] = new Array(24)
	.fill(new Date().getHours())
	.map((hour, index) => (hour + index < 24 ? hour + index : hour + index - 24));

const generateCount = (rank: number) => {
	return new Array(24)
		.fill(0)
		.map(() => (3 - rank) * 500 + Math.floor(Math.random() * (3 - rank) * 300));
};

const generateData = (top3: Array<SongDetail>) => {
	return {
		labels: hourArr,
		datasets: top3.map((item, id) => ({
			data: generateCount(id),
			label: item.title,
			borderColor: id === 0 ? "blue" : id === 1 ? "green" : "red",
			fill: false,
		})),
	};
};

const options = {
	title: {
		display: false,
	},
	legend: {
		display: false,
	},
	maintainAspectRatio: true,
};

const datetimeFormat = (date: Date) => {
	let dd: number | string = date.getDate();
	let mm: number | string = date.getMonth() + 1;
	let yyyy: number | string = date.getFullYear();
	let hh: number | string = date.getHours();
	let min: number | string = date.getMinutes();
	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;
	if (hh < 10) hh = "0" + hh;
	if (min < 10) min = "0" + min;
	return dd + "/" + mm + "/" + yyyy + " " + hh + ":" + min;
};

export { generateData, options, datetimeFormat };
