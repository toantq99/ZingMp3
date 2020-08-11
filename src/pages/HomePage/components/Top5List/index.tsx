// Libs
import React from "react";
// Components
import Top5Item from "@HomePage/components/Top5Item";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";

const Top5List: React.FC<{ list: TrackDetail[] }> = ({ list }) => {
	return (
		<div className="top5-list-wrapper">
			{list.map((item, id) => (
				<Top5Item key={id} item={item} rank={id + 1} />
			))}
		</div>
	);
};

export default Top5List;
