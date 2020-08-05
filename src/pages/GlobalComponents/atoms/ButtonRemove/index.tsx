import React from "react";

const ButtonRemove = () => {
	return (
		<button
			className="btn-remove"
			title="Xóa khỏi danh sách yêu thích"
			onClick={() => dispatch(removeFav(item))}
		>
			<DeleteFilled />
		</button>
	);
};
export default ButtonRemove;
