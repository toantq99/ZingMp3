import React from "react";
import HotArtistItem from "./HotArtistItem";

const list = new Array(8);
list.fill({ name: "Hồ quang hiếu" });

export default function HotArtist() {
	return (
		<div>
			<h2 className="text-upper">
				Nghệ sĩ hot
				<span className="material-icons" style={{ verticalAlign: "middle" }}>
					keyboard_arrow_right
				</span>
			</h2>
			<div className="row">
				<div className="col col-1">
					<HotArtistItem item={list[0]} width={210} height={210} />
				</div>
				<div className="col col-2">
					<div
						style={{
							display: "grid",
							columnGap: 10,
							rowGap: 10,
							gridTemplateColumns: "auto auto auto auto",
							marginLeft: -10,
						}}
					>
						{list.map((item, id) => (
							<HotArtistItem key={id} item={item} width={100} height={100} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
