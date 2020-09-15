import { Action, handleActions } from 'redux-actions';
import { WeatherResponseItem } from '../../types';
import { fetchRequest, fetchSuccess } from './actions';
import { serializeTerm } from './helpers';
import { RequestAction, SuccessAction } from './types';

type WeatherState = {
	activeSearch: string;
	byTerm: {
		[term: string]: WeatherResponseItem & { timeFetched: number };
	};
	terms: string[];
};

export default handleActions(
	{
		[fetchRequest.toString()]: (state, { payload }: Action<RequestAction>) => ({
			...state,
			activeSearch: serializeTerm(payload)
		}),

		[fetchSuccess.toString()]: (state, { payload }: Action<SuccessAction>) => {
			const term = serializeTerm(payload);
			const byTerm = {
				...state.byTerm,
				[term]: {
					timeFetched: +new Date(),
					...payload.data
				}
			};
			return {
				...state,
				byTerm,
				terms: Object.keys(byTerm)
			};
		}
	},
	{
		activeSearch: '',
		byTerm: {},
		terms: []
	} as WeatherState
);
