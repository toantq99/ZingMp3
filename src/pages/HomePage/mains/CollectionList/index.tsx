import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Collection from "@HomePage/components/Collection";

import { getCollection } from "@actions/homeAction";
import withLoading from "@HOCs/withLoading";
import { RootState } from "@constants/state";

const queryList = ["spring", "autumn", "winter"];

const CollectionList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCollection(queryList));
	}, [dispatch]);

	const collection = useSelector((state: RootState) => state.home.collection);
	const { isLoading = false } = collection;
	return withLoading(isLoading)(
		<>
			{queryList.map((query, id) => (
				<Collection key={id} name={query} list={collection[query] || []} />
			))}
		</>
	);
};
export default CollectionList;
