import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import ButtonGroupInline from "@GlobalComponents/mains/ButtonGroupInline";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import Thumbnail from "@GlobalComponents/mains/Thumbnail";

const formarDuration = (duration: number) => {
	const mins = Math.floor(duration / 60);
	const secs = duration % 60;
	return mins + " phút " + secs + " giây";
};

interface Props {
	item: SongDetail;
	size?: string;
}
const SongItem: React.FC<Props> = ({ item, size }) => {
	const [hovering, setHovering] = useState(false);
	return (
		<Row
			gutter={[0, 20]}
			align="middle"
			justify="space-between"
			className="song-item"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<Col span={18}>
				<Row gutter={10} align="middle">
					<Col>
						<Thumbnail
							width={size ? 90 : 50}
							height={size ? 90 : 50}
							item={item}
						/>
					</Col>
					<Col>
						<div className={size ? "large-title" : "small-title"}>
							<Link to={`/bai-hat/${item.id}`} title={item.title}>
								{item.title_short}
							</Link>
						</div>
						<div className={size ? "large-singer" : "small-singer"}>
							{item.artist.name}
						</div>
						{size ? (
							<div>Thời lượng: {formarDuration(item.duration)}</div>
						) : null}
					</Col>
				</Row>
			</Col>
			<Col>
				{hovering ? <ButtonGroupInline item={item} size={size} /> : null}
			</Col>
		</Row>
	);
};
export default SongItem;
