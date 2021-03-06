import React from 'react';
import { LiveAnnouncer } from 'react-aria-live';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'react-jss';
import Router from './pages/Router';
import history from './helpers/history';
import store from './store';
import theme from './theme';

/**
 * Resources:
 * - Sun icon courtesy of https://www.flaticon.com/authors/dinosoftlabs
 * - Cloud image courtesy of https://pngriver.com/download-cloud-png-5-83292/
 * - Rain image courtesy of http://pngimg.com/download/13467
 * - Star iamge courtesy of https://www.flaticon.com/free-icon/star_1828884
 */
export default function App() {
	return (
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<ConnectedRouter history={history}>
					<ThemeProvider theme={theme}>
						<LiveAnnouncer>
							<Router />
						</LiveAnnouncer>
					</ThemeProvider>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	);
}
