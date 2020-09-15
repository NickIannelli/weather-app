import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Page from '../components/Page';
import routes from '../routes';
import selectors from '../store/page/selectors';

export default function Router() {
	const page = useSelector(selectors.getActivePage);
	const location = useLocation();

	return (
		<>
			<Header {...page!} />
			<Switch location={location}>
				{Object.keys(routes).map(path => (
					<Page key={path} path={path} {...routes[path]} />
				))}
			</Switch>
		</>
	);
}
