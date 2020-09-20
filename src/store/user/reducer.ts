import { Action, handleActions } from 'redux-actions';
import { pinLocation, unpinLocation } from './actions';
import { PinAction } from './types';

type UserState = {
	pinnedLocations: {
		city: string;
		state: string;
	}[];
};

export default handleActions(
	{
		[pinLocation.toString()]: (state, { payload }: Action<PinAction>) => {
			if (state.pinnedLocations.find(item => item.city === payload.city && item.state === payload.state)) return state;

			return {
				...state,
				pinnedLocations: [...state.pinnedLocations, payload]
			};
		},

		[unpinLocation.toString()]: (state, { payload }: Action<PinAction>) => {
			const index = state.pinnedLocations.findIndex(item => item.city === payload.city && item.state === payload.state);

			console.log('index: ', index);

			if (index === -1) return state;

			return {
				...state,
				pinnedLocations: state.pinnedLocations.filter((_, i) => i !== index)
			};
		}
	},
	{
		pinnedLocations: []
	} as UserState
);
