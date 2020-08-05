import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { SongDetail } from "@constants/types/songDetailTypes";
import Top3ItemRank from "@HomePage/atoms/Top3ItemRank";
import Top3ItemPercent from "@HomePage/atoms/Top3ItemPercent";
import Top3ItemInfo from "../Top3ItemInfo";

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
				<Top3ItemPercent />
			</div>
		</Link>
	);
};

export default Top3Item;
