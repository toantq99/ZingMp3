import React from "react";
import FavItem from "../FavItem";
import { Empty, Drawer } from "antd";

const FavDrawer = () => {
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
				favList.map((id, index) => <FavItem id={id} key={index} />)
			) : (
				<Empty description={"Danh sách yêu thích trống"} />
			)}
		</Drawer>
	);
};

export default FavDrawer;
