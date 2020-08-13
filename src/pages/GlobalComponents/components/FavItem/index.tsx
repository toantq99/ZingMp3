// Libs
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Components
import withFetching from "@HOCs/withFetching";
import ButtonRemoveInDrawer from "@GlobalComponents/atoms/ButtonRemoveInDrawer";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";
// Actions
import { removeFav, getFullFavItem } from "@actions/FavListAction";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";
import { EMPTY_TRACK_DETAIL } from "@constants/EmptyValues/Track";

const FavItem: React.FC<{ id: number }> = ({ id }) => {
	const [fullItem, setFullItem] = useState<TrackDetail>({
		...EMPTY_TRACK_DETAIL,
		id,
	});
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		getFullFavItem(id)
			.then((result) => setFullItem(result.data))
			.then(() => setIsLoading(false));
	}, [id]);
	const dispatch = useDispatch();

	return withFetching({ isLoading, height: 150 })(
		<div className="fav-item-wrapper">
			<Thumbnail width={50} height={50} item={fullItem} />
			<div className="info">
				<Link
					to={`/bai-hat/${fullItem.id}`}
					title={fullItem.title}
					className="title"
				>
					{fullItem.title_short}
				</Link>
				<div className="artist">{fullItem.artist.name}</div>
			</div>
			<div className="button-container">
				<ButtonRemoveInDrawer
					handleRemove={() => dispatch(removeFav(fullItem))}
				/>
			</div>
		</div>
	);
};

export default FavItem;
