// Libs
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Spin, Row, Col } from "antd";
import { Link } from "react-router-dom";
// Components
import ButtonRemoveInDrawer from "@GlobalComponents/atoms/ButtonRemoveInDrawer";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";
// Actions
import { removeFav, getFullFavItem } from "@actions/favListAction";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

const FavItem: React.FC<{ id: number }> = ({ id }) => {
	const [fullItem, setFullItem] = useState<SongDetail | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		getFullFavItem(id)
			.then((result) => setFullItem(result))
			.then(() => setIsLoading(false));
	}, [id]);
	const dispatch = useDispatch();

	return (
		<div className="fav-item-wrapper">
			{isLoading || !fullItem ? (
				<Row align="middle" justify="center" style={{ height: 50 }}>
					<Col>
						<Spin size="default" />
					</Col>
				</Row>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};

export default FavItem;
