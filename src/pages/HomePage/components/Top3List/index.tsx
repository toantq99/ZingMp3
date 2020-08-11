// Libs
import React from "react";
// Components
import Top3Item from "@HomePage/components/Top3Item";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

const Top3List: React.FC<{ list: TrackDetail[] }> = ({ list }) => {
	return (
		<div className="top3-list-wrapper">
			{list.map((item, id) => (
				<Top3Item rank={id + 1} item={item} key={id} />
			))}
		</div>
	);
};

export default Top3List;
