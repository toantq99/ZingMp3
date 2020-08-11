import { FetchError } from "@constants/DataTypes/HomeTypes";
import withLoading from "./withLoading";
import withError from "./withError";

interface Props {
	key?: number;
	isLoading: boolean;
	error?: FetchError;
	title?: string;
	height?: number;
}

const withFetching = (props: Props) => (Component: any) =>
	withLoading(
		props.isLoading,
		props.key,
		props.height
	)(withError(props.error, props.title, props.key, props.height)(Component));

export default withFetching;
