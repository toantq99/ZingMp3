import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Drawer, Empty, Row, Col, Spin } from "antd";
import { HeartFilled } from "@ant-design/icons";
import "./style.scss";
import FavItem from "./FavItem";
import { getFullFavList } from "../../../actions/favListAction";

export default function FavButton() {
	const [show, setShow] = useState(false);
	const [favFullList, setFavFullList] = useState(null);
	const favList = useSelector((state) => state.favList);
	const handleDelete = (song) => {
		setFavFullList(favFullList.filter((item) => item.id !== song.id));
	};

	return (
		<div>
			<button
				className="btn-fav"
				onClick={() => {
					setShow(true);
					getFullFavList(favList).then((result) => setFavFullList(result));
				}}
			>
				<HeartFilled />
			</button>
			<Drawer
				title="Danh sách yêu thích"
				placement="left"
				closable={true}
				onClose={() => setShow(false)}
				visible={show}
				width={400}
			>
				<Row gutter={[0, 16]}>
					{favFullList ? (
						favFullList.length > 0 ? (
							favFullList.map((item, id) => (
								<Col span={24} key={id}>
									<FavItem item={item} handleDelete={handleDelete} />
								</Col>
							))
						) : (
							<Col span={24}>
								<Empty description={"Danh sách yêu thích trống"} />
							</Col>
						)
					) : (
						<Col span={24}>
							<Spin size="large" />
						</Col>
					)}
				</Row>
			</Drawer>
		</div>
	);
}
