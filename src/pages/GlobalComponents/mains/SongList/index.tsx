// Libs
import React from "react";
// Components
import SongItem from "../../components/SongItem";
import TitleWithArrow from "../TitleWithArrow";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Empty } from "antd";

interface Props {
	name: string;
	list: TrackDetail[];
	size?: string;
}

const SongList: React.FC<Props> = ({ name, list, size }) => {
	return (
		<div className="song-list-wrapper">
			<TitleWithArrow title={name} />
			{list.length ? (
				list.map((item, id) => <SongItem key={id} item={item} size={size} />)
			) : (
				<Empty />
			)}
		</div>
	);
};
export default SongList;
