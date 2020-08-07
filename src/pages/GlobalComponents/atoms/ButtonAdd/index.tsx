// Libs
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const ButtonAdd: React.FC<{ handleAdd: () => void }> = ({ handleAdd }) => {
	return (
		<button title="Thêm vào danh sách yêu thích" onClick={handleAdd}>
			<PlusOutlined />
		</button>
	);
};
export default ButtonAdd;
