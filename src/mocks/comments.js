import { datetimeFormat } from "./chart";

const comments = new Array(4);
comments.fill({
	author: {
		id: "2529",
		name: "dadbond",
		link: "https://www.deezer.com/profile/2529",
		picture: "https://api.deezer.com/user/2529/image",
	},
	text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
});

const today = new Date();

export default comments.map((cmt) => ({
	...cmt,
	date: datetimeFormat(
		new Date(today.getTime() - Math.floor(Math.random() * 999999999))
	),
}));
