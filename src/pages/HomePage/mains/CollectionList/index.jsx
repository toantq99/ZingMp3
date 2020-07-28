import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Collection from "@HomePage/components/Collection";

import { getCollection } from "@actions/homeAction";
import withLoading from "@HOCs/withLoading";

const queryList = ["spring", "autumn", "winter"];

export default function CollectionList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCollection(queryList));
	}, [dispatch]);

	const collection = useSelector((state) => state.home.collection);
	const { isLoading = false } = collection;
	return withLoading(isLoading)(
		<>
			<Collection name={queryList[0]} list={collection[queryList[0]] || []} />
			<Collection name={queryList[1]} list={collection[queryList[1]] || []} />
			<Collection name={queryList[2]} list={collection[queryList[2]] || []} />
		</>
	);
}
