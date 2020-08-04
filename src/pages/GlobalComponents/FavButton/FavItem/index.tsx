import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Spin } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Thumbnail from "@GlobalComponents/Thumbnail";

import { removeFav, getFullFavItem } from "@actions/favListAction";
import { SongDetail } from "@constants/types/songDetailTypes";

interface Props {
	id: string;
}

const FavItem: React.FC<Props> = ({ id }) => {
	const [fullItem, setFullItem] = useState<SongDetail | null>(null);
	useEffect(() => {
		getFullFavItem(id).then((result) => setFullItem(result));
	}, [id]);
	const dispatch = useDispatch();

	if (fullItem)
		return (
			<Row
				gutter={[0, 20]}
				align="middle"
				justify="space-between"
				className="border-bottom"
			>
				<Col span={18}>
					<Row gutter={10}>
						<Col>
							<Thumbnail width={50} height={50} item={fullItem} />
						</Col>
						<Col>
							<div className="small-title">
								<Link to={`/bai-hat/${fullItem.id}`} title={fullItem.title}>
									{fullItem.title_short}
								</Link>
							</div>
							<div>{fullItem.artist.name}</div>
						</Col>
					</Row>
				</Col>
				<Col>
					<Button
						type="primary"
						shape="round"
						icon={<DeleteFilled />}
						onClick={() => {
							dispatch(removeFav(fullItem));
						}}
						title="Xóa khỏi danh sách yêu thích"
					/>
				</Col>
			</Row>
		);
	else
		return (
			<Row
				gutter={[0, 20]}
				align="middle"
				justify="space-between"
				className="border-bottom"
			>
				<Col span={24}>
					<Spin size="large" />
				</Col>
			</Row>
		);
};

export default FavItem;
