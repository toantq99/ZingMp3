import React from "react";
import CollectionItem from "../CollectionItem";
import { Row } from "antd";
const collection = new Array(12);
collection.fill({ name: "Chuyện chưa kể (Single)", singer: "IG, Ngọc" });

export default function HotAlbum() {
	return (
		<div>
			<h2 className="text-upper">
				Album Hot
				<span className="material-icons icon-right">keyboard_arrow_right</span>
			</h2>
			<Row gutter={[16, 16]}>
				{collection.map((item, id) => (
					<CollectionItem
						key={id}
						item={item}
						width={150}
						height={150}
						src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/e/4/a/ce4ad9f00a799de5b4aa76b911f347c3.jpg"
					/>
				))}
			</Row>
		</div>
	);
}
