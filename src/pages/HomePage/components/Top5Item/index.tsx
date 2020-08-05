import React from "react";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
import Top5ItemCaret from "@HomePage/components/Top5ItemCaret";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import Top5ItemRank from "@HomePage/atoms/Top5ItemRank";
import Top5ItemInfo from "@HomePage/components/Top5ItemInfo";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";

interface Props {
	rank: number;
	item: SongDetail;
}

const Top5Item: React.FC<Props> = ({ rank, item }) => {
	return (
		<div className="top5-item-wrapper">
			<Top5ItemRank rank={rank} />
			<Top5ItemCaret />
			<Thumbnail width={60} height={60} item={item} />
			<Top5ItemInfo item={item} />
			<ButtonGroupInline item={item} />
		</div>
	);
};

export default Top5Item;
