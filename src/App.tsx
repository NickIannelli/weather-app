import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'react-jss';
import Router from './pages/Router';
import history from './helpers/history';
import store from './store';
import theme from './theme';

export default function App() {
	return (
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<ConnectedRouter history={history}>
					<ThemeProvider theme={theme}>
						<Router />
					</ThemeProvider>
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	);
}
