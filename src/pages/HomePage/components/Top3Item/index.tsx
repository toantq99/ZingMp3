import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { SongDetail } from "../../../../constants/types/songDetailTypes";

interface Props {
	rank: number;
	item: SongDetail;
}

const Top3Item: React.FC<Props> = ({ rank, item }) => {
	const fakePercent = Math.floor(Math.random() * 50);
	return (
		<Link to={`/bai-hat/${item.id}`}>
			<div className="top3-item-wrapper">
				<div className={`rank-${rank} top3-item-left`}>{"0" + rank}</div>
				<div className="top3-item-center">
					<img src={item.album.cover_small} alt="singer img" className="img" />
					<div className="info">
						<div className="title">{item.title_short}</div>
						<small>{item.artist.name}</small>
					</div>
				</div>
				<div className={`rank-${rank} top3-item-right`}>
					{fakePercent + "%"}
				</div>
			</div>
		</Link>
	);
};

export default Top3Item;
