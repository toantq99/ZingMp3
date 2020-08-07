import React from "react";
import { DeleteFilled } from "@ant-design/icons";

const ButtonRemove: React.FC<{ handleRemove: () => void }> = ({
	handleRemove,
}) => {
	return (
		<button title="Xóa khỏi danh sách yêu thích" onClick={handleRemove}>
			<DeleteFilled />
		</button>
	);
};
export default ButtonRemove;
