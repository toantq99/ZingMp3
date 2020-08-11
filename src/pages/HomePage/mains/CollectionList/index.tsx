// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import Collection from "@HomePage/components/Collection";
// Types
import { RootState } from "@constants/State";
// Actions
import { getCollection } from "@actions/HomeAction";
import withFetching from "@HOCs/withFetching";
// Mocks
const queryList = ["spring", "summer", "autumn", "winter"];

const CollectionList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		queryList.map((query) => dispatch(getCollection(query)));
	}, [dispatch]);

	const { collection } = useSelector((state: RootState) => state.home);
	return (
		<div className="collection-list-wrapper">
			{queryList.map((query, id) => {
				const { isLoading = true, data = [], error } = collection[query] || {};
				return withFetching({ isLoading, error, key: id, title: query })(
					<Collection key={id} name={query} list={data} />
				);
			})}
		</div>
	);
};
export default CollectionList;
