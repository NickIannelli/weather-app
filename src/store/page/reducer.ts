import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router';
import { omit } from 'lodash';
import routes from '../../routes';
import { ReduxPageConfig } from '../../types';

const getDerivedStateForPath = (pathname: string) =>
	Object.keys(routes)
		.map(path => ({
			[path]: {
				...omit(routes[path], 'component'),
				isActive: !!matchPath(pathname, {
					path,
					...omit(routes[path], 'showBack', 'showMenu', 'component')
				})
			} as ReduxPageConfig
		}))
		.reduce((prev, curr) => ({ ...prev, ...curr }), {});

export default handleActions(
	{
		[LOCATION_CHANGE]: (_, action: any) => getDerivedStateForPath(action.payload.location.pathname)
	},
	getDerivedStateForPath('/')
);
