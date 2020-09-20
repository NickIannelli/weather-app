import { ReduxStore } from '../../types';

export const getWeatherForTerm = (term: string, state: ReduxStore) => state.weather.byTerm[term];

export const getActiveWeather = (state: ReduxStore) =>
	getWeatherForTerm(state.weather.activeSearch, state) || getWeatherForTerm(state.weather.previousTerm, state);
