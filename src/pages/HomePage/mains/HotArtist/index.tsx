// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import HotArtistItem from "@HomePage/components/HotArtistItem";
// Actions
import { getArtistChart } from "@actions/homeAction";
// Types
import { RootState } from "@constants/state";
// SCSS
import "./style.scss";

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
			<TitleWithArrow title="nghệ sĩ hot" />
			<div className="hot-artist-body">
				<HotArtistItem item={first} width={215} height={215} area="top1" />
				{rest.map((artist, id) => (
					<HotArtistItem
						item={artist}
						width={100}
						height={100}
						key={id}
						area={"top" + (id + 2)}
					/>
				))}
			</div>
		</div>
	);
};
export default HotArtist;
