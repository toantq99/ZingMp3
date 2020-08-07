// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import Collection from "@HomePage/components/Collection";
// Types
import { RootState } from "@constants/state";
// Actions
import { getCollection } from "@actions/homeAction";
// Mocks
const queryList = ["spring", "summer", "autumn", "winter"];

const CollectionList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCollection(queryList));
	}, [dispatch]);

	const collection = useSelector((state: RootState) => state.home.collection);
	const { isLoading = false } = collection;
	return withLoading(isLoading)(
		<div className="collection-list-wrapper">
			{queryList.map((query, id) => (
				<Collection key={id} name={query} list={collection[query] || []} />
			))}
		</div>
	);
};
export default CollectionList;
