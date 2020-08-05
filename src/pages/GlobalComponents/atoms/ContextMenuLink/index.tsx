import React from "react";
import { Link } from "react-router-dom";

const ContextMenuLink = () => {
	return (
		<Link to={type === "album" ? `/album/${item.id}` : `/bai-hat/${item.id}`}>
			<button>Nghe</button>
		</Link>
	);
};

export default ContextMenuLink;
