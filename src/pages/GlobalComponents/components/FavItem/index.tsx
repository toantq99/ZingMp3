import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { Link } from "react-router-dom";

import { removeFav, getFullFavItem } from "@actions/favListAction";
import { SongDetail } from "@constants/types/songDetailTypes";
import ButtonRemoveInDrawer from "@GlobalComponents/atoms/ButtonRemoveInDrawer";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";

interface Props {
	id: number;
}

const FavItem: React.FC<Props> = ({ id }) => {
	const [fullItem, setFullItem] = useState<SongDetail | null>(null);
	useEffect(() => {
		getFullFavItem(id).then((result) => setFullItem(result));
	}, [id]);
	const dispatch = useDispatch();

	if (fullItem)
		return (
			<div>
				<Thumbnail width={50} height={50} item={fullItem} />
				<Link to={`/bai-hat/${fullItem.id}`} title={fullItem.title}>
					{fullItem.title_short}
				</Link>
				<div>{fullItem.artist.name}</div>
				<ButtonRemoveInDrawer />
			</div>
		);
	else return <Spin size="large" />;
};

export default FavItem;
