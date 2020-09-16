import { ReduxStore } from '../../types';

export const getActiveWeather = (state: ReduxStore) =>
	state.weather.byTerm[state.weather.activeSearch] || state.weather.byTerm[state.weather.previousTerm];
