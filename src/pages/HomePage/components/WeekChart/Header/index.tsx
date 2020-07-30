import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";
import { SongDetail } from "../../../../../constants/types/songDetailTypes";
import { Album } from "../../../../../constants/types/albumTypes";
import { WeekChartType } from "../../../mains/WeekChartList";

interface Props {
	item: SongDetail | Album;
	type: number;
}

const Header: React.FC<Props> = ({ item = {}, type }) => {
	return (
		<Row className="wchart-header">
			<Col span={24}>
				<Row className="button-group">
					<Col span={8}>
						<button className="active">Việt Nam</button>
					</Col>
					<Col span={8}>
						<button>US-UK</button>
					</Col>
					<Col span={8}>
						<button>K-Pop</button>
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Row
					className="banner"
					style={{
						background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("${
							item.type === "track"
								? (item as SongDetail).album.cover
								: (item as Album).cover
						}")`,
					}}
					align="bottom"
				>
					<Col span={24} className="banner-item">
						<Row gutter={10} align="middle">
							<Col className="rank">01</Col>
							<Col>
								<div className="title">
									<Link
										to={
											item.type === "track"
												? `/bai-hat/${item.id}`
												: `/album/${item.id}`
										}
									>
										{type === WeekChartType.Track
											? (item as SongDetail).title_short
											: (item as Album).title}
									</Link>
								</div>
								<div>{(item.artist || {}).name}</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};
export default Header;
