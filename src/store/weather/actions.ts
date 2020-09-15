import { createActions } from 'redux-actions';
import getWeather from '../../api/weather';
import { ErrorResponse, WeatherResponseItem } from '../../types';
import { serializeTerm } from './helpers';
import { FailureAction, RequestAction, SuccessAction } from './types';

export const { fetchRequest, fetchSuccess, fetchFailure, setUnits } = createActions(
	{
		FETCH_REQUEST: (city, state): RequestAction => ({ city, state }),
		FETCH_SUCCESS: (city, state, data: WeatherResponseItem): SuccessAction => ({
			city,
			state,
			data
		}),
		FETCH_FAILURE: (city, state, error: ErrorResponse): FailureAction => ({
			city,
			state,
			error
		})
	},
	{
		prefix: '@WEATHER'
	}
);

export const fetchWeather = (city: string, state: string) => async (dispatch: Function, getState: Function) => {
	const { weather } = getState();
	const term = serializeTerm({ city, state });

	dispatch(fetchRequest(city, state));

	// No need to re-fetch data that's fresh enough
	if (weather.byTerm[term]?.timeFetched > +new Date() - 5e3 * 60) return;

	const result = await getWeather({ city, state });
	if (!(result as ErrorResponse).isError) {
		dispatch(fetchSuccess(city, state, result));
	} else {
		dispatch(fetchFailure(city, state, (result as ErrorResponse).message));
	}
};
