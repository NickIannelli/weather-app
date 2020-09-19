import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import Page from '../components/Page';
import routes from '../routes';

export default function Router() {
	const location = useLocation();

	return (
		<Switch location={location}>
			{Object.keys(routes).map(path => (
				<Page key={path} path={path} {...routes[path]} />
			))}
		</Switch>
	);
}
