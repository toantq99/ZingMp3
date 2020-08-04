import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Empty, Row, Col, Badge } from "antd";
import { HeartFilled } from "@ant-design/icons";
import "./style.scss";
import FavItem from "./FavItem";
import { RootState } from "@constants/state";
import {
	dispatchListFromStorage,
	// saveListToStorage,
} from "@actions/favListAction";

const FavButton: React.FC = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const [isFirstMount, setIsFirstMount] = useState(true);
	const favList = useSelector((state: RootState) => state.favList);

	useEffect(() => {
		if (isFirstMount) {
			dispatch(dispatchListFromStorage());
			setIsFirstMount(false);
		}
	}, [dispatch, isFirstMount]);

	return (
		<>
			<button
				className="btn-fav"
				onClick={() => {
					setShow(true);
				}}
			>
				<Badge count={favList.length} showZero={true} offset={[10, -5]}>
					<HeartFilled style={{ fontSize: 16 }} />
				</Badge>
			</button>
			<Drawer
				title={`${favList.length} bài hát trong danh sách`}
				placement="left"
				closable={true}
				onClose={() => setShow(false)}
				visible={show}
				width={400}
			>
				<Row gutter={[0, 16]}>
					{favList.length > 0 ? (
						favList.map((id, index) => (
							<Col span={24} key={index}>
								<FavItem id={id} />
							</Col>
						))
					) : (
						<Col span={24}>
							<Empty description={"Danh sách yêu thích trống"} />
						</Col>
					)}
				</Row>
			</Drawer>
		</>
	);
};
export default FavButton;
