import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import {
	PlusOutlined,
	DownloadOutlined,
	ShareAltOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import "./style.scss";

import { addFav, removeFav } from "../../../../actions/favListAction";

export default function ButtonGroup({ song }) {
	let isAdded = useSelector((state) => state.favList.includes(song.id));
	const [added, setAdded] = useState(isAdded);
	useEffect(() => {
		setAdded(isAdded);
		return () => {};
	}, [isAdded]);
	const dispatch = useDispatch();

	return (
		<Row gutter={16}>
			<Col span={24}>
				{added ? (
					<Button
						type="primary"
						onClick={() => {
							dispatch(removeFav(song));
							setAdded(false);
						}}
						icon={<DeleteOutlined />}
					>
						Xóa khỏi danh sách yêu thích
					</Button>
				) : (
					<Button
						onClick={() => {
							dispatch(addFav(song));
							setAdded(true);
						}}
						icon={<PlusOutlined />}
					>
						Thêm vào danh sách yêu thích
					</Button>
				)}

				<Button icon={<DownloadOutlined />}>Tải xuống</Button>
				<Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
			</Col>
		</Row>
	);
}
