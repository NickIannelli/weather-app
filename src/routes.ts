import React from 'react';
import { PageConfig } from './types';

const routes: {
	[pagePath: string]: PageConfig;
} = {
	'/': {
		exact: true,
		title: 'Refunds & Returns',
		component: React.lazy(() => import('./pages/content/HomePage')),
		showBack: false,
		showMenu: false
	},
	'/weather/:location': {
		exact: true,
		title: `How's the weather in :location`,
		component: React.lazy(() => import('./pages/content/WeatherPage')),
		showMenu: true
	},
	'/settings': {
		exact: true,
		title: 'Settings',
		component: React.lazy(() => import('./pages/content/SettingsPage')),
		showMenu: false,
		showBack: false
	},
	'*': {
		exact: false,
		title: 'Not Found',
		component: React.lazy(() => import('./pages/content/NotFoundPage'))
	}
};

export default routes;
