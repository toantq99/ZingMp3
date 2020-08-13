// Libs
import React from "react";
import { Empty, Drawer } from "antd";
// Components
import FavItem from "../FavItem";
// Types
import { FavList } from "@constants/DataTypes/FavListTypes";

interface Props {
	favList: FavList;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const FavDrawer: React.FC<Props> = ({ favList, show, setShow }) => {
	return (
		<Drawer
			title={`${favList.length} bài hát trong danh sách`}
			placement="left"
			closable={true}
			onClose={() => setShow(false)}
			visible={show}
			width={400}
		>
			{favList.length > 0 ? (
				favList.map((id, index) => <FavItem id={id} key={id} />)
			) : (
				<Empty description={"Danh sách yêu thích trống"} />
			)}
		</Drawer>
	);
};

export default FavDrawer;
