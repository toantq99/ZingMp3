// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import HotArtistItem from "@HomePage/components/HotArtistItem";
// Actions
import { getArtistChart } from "@actions/HomeAction";
// Types
import { RootState } from "@constants/State";
// SCSS
import "./style.scss";
import { EMPTY_ARTIST } from "@constants/EmptyValues/Track";

const HotArtist: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getArtistChart());
		return () => {};
	}, [dispatch]);

	const { isLoading, data = [], error } = useSelector(
		(state: RootState) => state.home.artistChart
	);
	const [first = EMPTY_ARTIST, ...rest] = data || [];

	return (
		<div className="hot-artist-wrapper">
			<TitleWithArrow title="nghệ sĩ hot" />
			{withFetching({ isLoading: isLoading, error })(
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
			)}
		</div>
	);
};
export default HotArtist;
