import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

import SongList from "@GlobalComponents/SongList";

import { searchSong, emptySearch } from "@actions/searchAction";
import withLoading from "@HOCs/withLoading";
import "./style.scss";

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

	const { isLoading, data } = useSelector((state) => state.search);

	return withLoading(isLoading)(
		<div className="search-page-wrapper">
			<div className="col-span-3">
				<SongList
					name={`${(page - 1) * pageSize + 1}-${
						page * pageSize < data.total ? page * pageSize : data.total
					}/${data.total} kết quả tìm kiếm cho ${query}`}
					list={data.data || []}
					size="large"
				/>
				<Pagination
					total={data.total}
					showSizeChanger
					showQuickJumper
					current={page}
					defaultPageSize={pageSize}
					showTotal={() => `Tổng số ${data.total} kết quả`}
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
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}
