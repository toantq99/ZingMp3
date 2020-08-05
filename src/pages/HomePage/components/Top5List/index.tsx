import React from "react";
import Top5Item from "@HomePage/components/Top5Item";
import { SongDetail } from "@constants/types/songDetailTypes";

const Top5List: React.FC<{ list: SongDetail[] }> = ({ list }) => {
	return (
		<div className="top5-list-wrapper">
			{list.map((item, id) => (
				<Top5Item key={id} item={item} rank={id + 1} />
			))}
		</div>
	);
};

export default Top5List;
