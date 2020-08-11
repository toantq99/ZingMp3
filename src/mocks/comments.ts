import { datetimeFormat } from "./chart";
import { Comment } from "@constants/DataTypes/TrackTypes";
import { EMPTY_COMMENT } from "@constants/EmptyValues/Track";

export const generateComments = (limit: number) => {
	const comments: Comment[] = new Array(limit).fill(EMPTY_COMMENT);
	return comments.map(() => ({
		author: {
			id: 2529,
			name: "dadbond",
			link: "https://www.deezer.com/profile/2529",
			picture: "https://api.deezer.com/user/2529/image",
		},
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		date: datetimeFormat(
			new Date(new Date().getTime() - Math.floor(Math.random() * 999999999))
		),
	}));
};
