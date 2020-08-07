// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";

const ContextMenuLink: React.FC<{
	type: string;
	item: Album | SongDetail;
}> = ({ item, type }) => {
	return (
		<Link to={type === "album" ? `/album/${item.id}` : `/bai-hat/${item.id}`}>
			<button>Nghe</button>
		</Link>
	);
};

export default ContextMenuLink;
