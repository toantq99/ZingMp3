import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";

import { addFav, removeFav } from "@actions/favListAction";
import { SongDetail } from "@constants/types/songDetailTypes";
import { RootState } from "@constants/state";
import ButtonRemove from "@GlobalComponents/atoms/ButtonRemove";
import ButtonAdd from "@GlobalComponents/atoms/ButtonAdd";
import ButtonShare from "@GlobalComponents/atoms/ButtonShare";

interface Props {
	item: SongDetail;
	size?: string;
}

const ButtonGroupInline: React.FC<Props> = ({ item, size }) => {
	const dispatch = useDispatch();
	const isAdded = useSelector((state: RootState) =>
		state.favList.includes(item.id)
	);

	return (
		<span className={size ? "large" : "small"}>
			{isAdded ? <ButtonRemove /> : <ButtonAdd />}
			<ButtonShare />
		</span>
	);
};
export default ButtonGroupInline;
