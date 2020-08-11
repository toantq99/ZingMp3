// Libs
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

// Components
import Navbar from "@GlobalComponents/mains/Navbar";
import Footer from "@GlobalComponents/mains/Footer";
import ToTopButton from "@GlobalComponents/mains/ToTopButton";
import FavButton from "@GlobalComponents/mains/FavButton";
// SCSS
import "./index.scss";
import { loginFromStorage } from "@actions/AuthAction";
import { RootState } from "@constants/State";
import withLoading from "@HOCs/withLoading";
// Lazy Components
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const AlbumPage = React.lazy(() => import("./pages/AlbumPage"));

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loginFromStorage());
	}, [dispatch]);
	const { isLoadingStorage } = useSelector((state: RootState) => state.auth);
	return withLoading(isLoadingStorage)(
		<BrowserRouter>
			<Navbar />
			<div className="app-wrapper">
				<Suspense fallback={<Spin />}>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/bai-hat/:id" component={DetailPage} />
						<Route path="/album/:id" component={AlbumPage} />
						<Route path="/tim-kiem/" component={SearchPage} />
					</Switch>
				</Suspense>
			</div>
			<Footer />
			<ToTopButton />
			<FavButton />
		</BrowserRouter>
	);
};

export default App;
