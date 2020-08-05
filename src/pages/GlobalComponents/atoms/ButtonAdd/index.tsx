import React from "react";

const ButtonAdd = () => {
	return (
		<button
			className="btn-icon"
			title="Thêm vào danh sách yêu thích"
			onClick={() => dispatch(addFav(item))}
		>
			<PlusOutlined />
		</button>
	);
};
export default ButtonAdd;
