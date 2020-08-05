import React from "react";
import SongItem from "../../components/SongItem";
import { Row, Col } from "antd";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import TitleWithArrow from "../TitleWithArrow";

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
