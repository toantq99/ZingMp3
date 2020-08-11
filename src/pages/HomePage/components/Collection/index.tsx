// Libs
import React from "react";
import { Empty } from "antd";
// Components
import CollectionItem from "@HomePage/components/CollectionItem";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
// Types
import { TrackDetail } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

interface Props {
	name: string;
	list: TrackDetail[];
}

const Collection: React.FC<Props> = ({ name, list }) => {
	return (
		<div className="collection-wrapper">
			<TitleWithArrow title={name} />
			<div className="collection-body">
				{list.length ? (
					list.map((item, id) => (
						<CollectionItem key={id} item={item} width={150} height={150} />
					))
				) : (
					<Empty />
				)}
			</div>
		</div>
	);
};
export default Collection;
