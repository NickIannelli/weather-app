import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';
import history from '../helpers/history';
import page from './page';
import weather from './weather';
import user from './user';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['router']
};

export const generateStore = () => {
	const rootReducer = combineReducers({
		router: connectRouter(history),
		page,
		weather,
		user
	});

	let composeEnhancers = compose;
	if (process.env.NODE_ENV !== 'production') {
		// @ts-ignore
		composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
	}

	const store = createStore(
		persistReducer(persistConfig, rootReducer),
		{},
		composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
	);
	const persistor = persistStore(store);

	return { store, persistor };
};

export default generateStore();
