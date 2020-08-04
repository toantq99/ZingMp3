import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import ContextMenu from "../ContextMenu";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";

interface Props {
	width: number;
	height: number;
	item: SongDetail | Album;
}

const Thumbnail: React.FC<Props> = ({ width, height, item }) => {
	const [hover, setHover] = useState(false);
	return (
		<Dropdown
			overlay={() => <ContextMenu item={item} type={item.type} />}
			trigger={["contextMenu"]}
		>
			<Link
				to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
			>
				<div
					className="thumbnail"
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
				>
					<img
						src={item.type === "track" ? item.album.cover_big : item.cover_big}
						alt="cover"
						width={width}
						height={height}
					/>
					{hover ? (
						<button className="btn-play" onMouseEnter={() => setHover(true)}>
							<PlayCircleOutlined />
						</button>
					) : null}
				</div>
			</Link>
		</Dropdown>
	);
};
export default Thumbnail;
