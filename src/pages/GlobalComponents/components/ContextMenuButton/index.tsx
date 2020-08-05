import React from "react";

const ContextMenuButton = () => {
	if (item.type === "track") {
		return (
			<>
				{isAdded ? (
					<button
						onClick={() => {
							dispatch(removeFav(item));
						}}
					>
						Bỏ yêu thích
					</button>
				) : (
					<button
						onClick={() => {
							dispatch(addFav(item));
						}}
					>
						Yêu thích
					</button>
				)}
			</>
		);
	} else {
		return null;
	}
};
export default ContextMenuButton;
