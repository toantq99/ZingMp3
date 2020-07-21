import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spin } from "antd";
import MainSong from "./MainSong";
import { getSongDetail } from "../../../actions/musicDetailAction";
import SongList from "../HomePage/SongList";
import Comments from "./Comments";
import "./style.scss";

export default function DetailPage({ match }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongDetail(match.params.id));
		return () => {};
	}, [dispatch, match.params.id]);
	const song = useSelector((state) => state.detailPage.song);
	const similarSong = useSelector((state) => state.detailPage.similar);
	const comments = useSelector((state) => state.detailPage.comments);
	return (
		<Row gutter={[16, 16]}>
			<Col span={16}>
				<Row>
					{song ? (
						<Col span={24}>
							<MainSong song={song} />
						</Col>
					) : (
						<Col span={24} className="text-center">
							<Spin size="large" />
						</Col>
					)}
				</Row>
				<Row>
					<Col span={24}>
						{comments ? (
							<Col span={24}>
								<Comments list={comments} />
							</Col>
						) : (
							<Col span={24} className="text-center">
								<Spin size="large" />
							</Col>
						)}
					</Col>
				</Row>
			</Col>
			<Col span={8}>
				{similarSong ? (
					<Col span={24}>
						<SongList name="Gợi ý" list={similarSong} />
					</Col>
				) : (
					<Col span={24} className="text-center">
						<Spin size="large" />
					</Col>
				)}
			</Col>
		</Row>
	);
}
