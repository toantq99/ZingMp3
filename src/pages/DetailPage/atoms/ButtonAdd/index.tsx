// Libs
import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ButtonAdd: React.FC<{ handleAdd: () => void }> = ({ handleAdd }) => {
	return (
		<Button onClick={handleAdd} icon={<PlusOutlined />}>
			Yêu thích
		</Button>
	);
};

export default ButtonAdd;
