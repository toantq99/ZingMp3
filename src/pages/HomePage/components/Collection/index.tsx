// Libs
import React from "react";
// Components
import CollectionItem from "@HomePage/components/CollectionItem";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
// Types
import { SongDetail } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

interface Props {
	name: string;
	list: SongDetail[];
}

const Collection: React.FC<Props> = ({ name, list }) => {
	return (
		<div className="collection-wrapper">
			<TitleWithArrow title={name} />
			<div className="collection-body">
				{list.map((item, id) => (
					<CollectionItem key={id} item={item} width={150} height={150} />
				))}
			</div>
		</div>
	);
};
export default Collection;
