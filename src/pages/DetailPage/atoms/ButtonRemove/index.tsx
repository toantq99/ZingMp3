// Libs
import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ButtonRemove: React.FC<{ handleRemove: () => void }> = ({
	handleRemove,
}) => {
	return (
		<Button type="primary" onClick={handleRemove} icon={<DeleteOutlined />}>
			Bỏ yêu thích
		</Button>
	);
};
export default ButtonRemove;
