// Libs
import React from "react";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

const ButtonRemoveInDrawer: React.FC<{ handleRemove: () => void }> = ({
	handleRemove,
}) => {
	return (
		<Button
			type="ghost"
			danger
			shape="circle"
			icon={<DeleteFilled />}
			onClick={handleRemove}
			title="Xóa khỏi danh sách yêu thích"
		/>
	);
};

export default ButtonRemoveInDrawer;
