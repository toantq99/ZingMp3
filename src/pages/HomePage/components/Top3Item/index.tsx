// Libs
import React from "react";
import { Link } from "react-router-dom";
// Components
import Top3ItemRank from "@HomePage/atoms/Top3ItemRank";
import Top3ItemInfo from "../Top3ItemInfo";
import Top3ItemPercent from "@HomePage/atoms/Top3ItemPercent";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	rank: number;
	item: SongDetail;
}

const Top3Item: React.FC<Props> = ({ rank, item }) => {
	return (
		<Link to={`/bai-hat/${item.id}`}>
			<div className="top3-item-wrapper">
				<Top3ItemRank rank={rank} />
				<Top3ItemInfo item={item} />
				<Top3ItemPercent rank={rank} />
			</div>
		</Link>
	);
};

export default Top3Item;
