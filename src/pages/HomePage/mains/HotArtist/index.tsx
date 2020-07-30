import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RightOutlined } from "@ant-design/icons";
import HotArtistItem from "../../../HomePage/dumps/HotArtistItem";
import "./style.scss";

import { getArtistChart } from "../../../../actions/homeAction";

import withLoading from "../../../../HOCs/withLoading";
import { RootState } from "../../../../constants/state";

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
			<h2>
				NGHỆ SĨ HOT
				<RightOutlined />
			</h2>
			<div className="hot-artist-grid">
				<div className="col-span-1">
					<HotArtistItem item={first} width={210} height={210} />
				</div>
				<div className="col-span-2">
					<div className="small-grid">
						{rest.map((item, id) => (
							<div className="col" key={id}>
								<HotArtistItem item={item} width={100} height={100} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default HotArtist;
