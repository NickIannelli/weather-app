import { createActions } from 'redux-actions';
import { PinAction } from './types';

export const { pinLocation, unpinLocation } = createActions(
	{
		PIN_LOCATION: (city, state): PinAction => ({ city, state }),
		UNPIN_LOCATION: (city, state): PinAction => ({ city, state })
	},
	{
		prefix: '@USER'
	}
);
