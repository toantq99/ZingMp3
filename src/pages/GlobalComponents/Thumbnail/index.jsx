import React, { useState } from "react";
import { Dropdown } from "antd";
import ContextMenu from "./ContextMenu";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./style.scss";

export default function Thumbnail({ width, height, item }) {
	const [hover, setHover] = useState(false);
	return (
		<Dropdown
			overlay={() => <ContextMenu item={item} />}
			trigger={["contextMenu"]}
		>
			<div
				className="thumbnail"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<img
					src={item.album.cover_big}
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
		</Dropdown>
	);
}
