import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './pages/Router';
import history from './helpers/history';
import store from './store';

export default function App() {
	return (
		<Provider store={store.store}>
			<PersistGate loading={null} persistor={store.persistor}>
				<ConnectedRouter history={history}>
					<Router />
				</ConnectedRouter>
			</PersistGate>
		</Provider>
	);
}
