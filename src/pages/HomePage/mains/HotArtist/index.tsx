import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

import { getArtistChart } from "@actions/homeAction";

import withLoading from "@HOCs/withLoading";
import { RootState } from "@constants/state";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import HotArtistGrid from "@HomePage/components/HotArtistGrid";
import HotArtistItem from "@HomePage/components/HotArtistItem";

const HotArtist: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArtistChart());
		return () => {};
	}, [dispatch]);

	const { artistChart } = useSelector((state: RootState) => state.home.chart);
	const { isLoading = false, data = [] } = artistChart;
	const [first, ...rest] = data;

	return withLoading(isLoading || !first)(
		<div className="hot-artist-wrapper">
			<TitleWithArrow title="nghe si hot" />
			<div className="hot-artist-body">
				<HotArtistItem item={first} width={210} height={210} />
				<HotArtistGrid />
			</div>
		</div>
	);
};
export default HotArtist;
