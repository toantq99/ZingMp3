import React from "react";
import CollectionItem from "../CollectionItem";
import { Row } from "antd";
const collection = new Array(12);
collection.fill({ name: "Bigcityboy", singer: "Binz, Touliver" });

export default function HotVideo() {
	return (
		<div>
			<h2 className="text-upper">
				Video Hot
				<span className="material-icons icon-right">keyboard_arrow_right</span>
			</h2>
			<Row gutter={[26, 26]}>
				{collection.map((item, id) => (
					<CollectionItem
						key={id}
						item={item}
						width={142}
						height={80}
						src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/8/7/9/2/879240e912e1e8aa870c7b89a68553bc.jpg"
					/>
				))}
			</Row>
		</div>
	);
}
