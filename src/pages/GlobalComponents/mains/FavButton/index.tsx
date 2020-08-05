import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Drawer, Empty, Row, Col, Badge } from "antd";
import { HeartFilled } from "@ant-design/icons";
import "./style.scss";
import FavItem from "../../components/FavItem";
import { RootState } from "@constants/state";
import {
	dispatchListFromStorage,
	// saveListToStorage,
} from "@actions/favListAction";
import FavDrawer from "@GlobalComponents/components/FavDrawer";

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
			<FavDrawer />
		</>
	);
};
export default FavButton;
