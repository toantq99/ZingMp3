// Libs
import React from "react";
// Components
import SongItem from "../../components/SongItem";
import TitleWithArrow from "../TitleWithArrow";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	name: string;
	list: SongDetail[];
	size?: string;
}

const SongList: React.FC<Props> = ({ name, list, size }) => {
	return (
		<div className="song-list-wrapper">
			<TitleWithArrow title={name} />
			{list.map((item, id) => (
				<SongItem key={id} item={item} size={size} />
			))}
		</div>
	);
};
export default SongList;
