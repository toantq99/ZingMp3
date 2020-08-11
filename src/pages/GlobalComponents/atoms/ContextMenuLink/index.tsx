// Libs
import React from "react";
import { Link } from "react-router-dom";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
import { Album } from "@constants/DataTypes/AlbumTypes";

const ContextMenuLink: React.FC<{
	type: string;
	item: Album | TrackDetail;
}> = ({ item, type }) => {
	return (
		<Link to={type === "album" ? `/album/${item.id}` : `/bai-hat/${item.id}`}>
			<button>Nghe</button>
		</Link>
	);
};

export default ContextMenuLink;
