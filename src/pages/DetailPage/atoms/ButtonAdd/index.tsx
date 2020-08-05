import React from "react";

const ButtonAdd = () => {
	return (
		<Button
			onClick={() => {
				dispatch(addFav(song));
				setAdded(true);
			}}
			icon={<PlusOutlined />}
		>
			Yêu thích
		</Button>
	);
};

export default ButtonAdd;
