import React from "react";
import CollectionItem from "@HomePage/components/CollectionItem";
import "./style.scss";
import { SongDetail } from "@constants/types/songDetailTypes";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";

interface Props {
	name: string;
	list: SongDetail[];
}

const Collection: React.FC<Props> = ({ name, list }) => {
	return (
		<div className="collection-wrapper">
			<TitleWithArrow title={name} />
			{list.map((item, id) => (
				<CollectionItem key={id} item={item} width={150} height={150} />
			))}
		</div>
	);
};
export default Collection;
