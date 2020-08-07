// Libs
import React from "react";
// Components
import Top5ItemRank from "@HomePage/atoms/Top5ItemRank";
import Top5ItemCaret from "@HomePage/components/Top5ItemCaret";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";
import Top5ItemInfo from "@HomePage/components/Top5ItemInfo";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";
import Top5ItemCount from "@HomePage/atoms/Top5ItemCount";

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
			<Top5ItemCount />
		</div>
	);
};

export default Top5Item;
