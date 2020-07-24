import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spin } from "antd";

import MainSong from "./mains/MainSong";
import Comments from "./mains/Comments";
import SongList from "@GlobalComponents/SongList";
import { getSongDetail, emptyDetail } from "@actions/detailAction";
import "./style.scss";

export default function DetailPage({ match }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongDetail(match.params.id));
		return () => {
			dispatch(emptyDetail());
		};
	}, [dispatch, match.params.id]);
	const song = useSelector((state) => state.detail.song);
	const similarSong = useSelector((state) => state.detail.similar);
	const comments = useSelector((state) => state.detail.comments);

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
						<SongList name="Cùng ca sĩ" list={similarSong} />
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
