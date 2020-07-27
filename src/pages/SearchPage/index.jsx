import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Spin, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

import SongList from "@GlobalComponents/SongList";

import { searchSong, emptySearch } from "@actions/searchAction";

export default function SearchPage({ location }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query");
	const page = parseInt(searchParams.get("page"));
	const pageSize = parseInt(searchParams.get("limit"));
	useEffect(() => {
		dispatch(searchSong(query, page, pageSize));
		return () => {
			dispatch(emptySearch());
		};
	}, [dispatch, query, page, pageSize]);

	const result = useSelector((state) => state.search);
	return (
		<>
			<Row>
				<Col span={16}>
					{result.total ? (
						<SongList
							name={`${(page - 1) * pageSize + 1}-${
								page * pageSize < result.total ? page * pageSize : result.total
							}/${result.total} kết quả tìm kiếm cho ${query}`}
							list={result.data}
							size="large"
						/>
					) : (
						<Spin size="large" />
					)}
				</Col>
			</Row>
			{result.total ? (
				<Row justify="center">
					<Col span={24}>
						<Pagination
							total={result.total}
							showSizeChanger
							showQuickJumper
							defaultPageSize={pageSize}
							showTotal={() => `Tổng số ${result.total} kết quả`}
							onChange={(page, pageSize) => {
								history.push(
									`/tim-kiem/?query=${query}&page=${page}&limit=${pageSize}`
								);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							onShowSizeChange={(current, size) => {
								history.push(
									`/tim-kiem/?query=${query}&page=${page}&limit=${size}`
								);
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
						/>
					</Col>
				</Row>
			) : null}
		</>
	);
}
