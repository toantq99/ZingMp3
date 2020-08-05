import React from "react";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { removeFav } from "@actions/favListAction";

const ButtonRemoveInDrawer = () => {
	return (
		<Button
			type="primary"
			shape="round"
			icon={<DeleteFilled />}
			onClick={() => {
				dispatch(removeFav(fullItem));
			}}
			title="Xóa khỏi danh sách yêu thích"
		/>
	);
};

export default ButtonRemoveInDrawer;
