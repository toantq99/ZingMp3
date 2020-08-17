// Libs
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Badge } from "antd";
import { HeartFilled } from "@ant-design/icons";
// Components
import FavDrawer from "@GlobalComponents/components/FavDrawer";
// Types
import { RootState } from "@constants/State";
// Actions
import { dispatchListFromStorage } from "@actions/FavListAction";
// SCSS
import "./style.scss";

const FavButton: React.FC = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const [isFirstMount, setIsFirstMount] = useState(true);
	const favList = useSelector((state: RootState) => state.commons.favList);

	useEffect(() => {
		if (isFirstMount) {
			dispatch(dispatchListFromStorage());
			setIsFirstMount(false);
		}
	}, [dispatch, isFirstMount]);

	return (
		<span className="fav-button-wrapper">
			<button
				className="fav-button"
				onClick={() => {
					setShow(true);
				}}
			>
				<Badge count={favList.length} showZero={true} offset={[10, -5]}>
					<HeartFilled style={{ fontSize: 16 }} />
				</Badge>
			</button>
			<FavDrawer favList={favList} show={show} setShow={setShow} />
		</span>
	);
};
export default FavButton;
