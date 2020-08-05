import React from "react";

const ButtonRemove = () => {
	return (
		<Button
			type="primary"
			onClick={() => {
				dispatch(removeFav(song));
				setAdded(false);
			}}
			icon={<DeleteOutlined />}
		>
			Bỏ yêu thích
		</Button>
	);
};
export default ButtonRemove;
