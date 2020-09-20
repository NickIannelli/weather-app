import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';
import usePeriodicReload from '../hooks/usePeriodicReload';
import { actions, selectors } from '../store/weather';
import { serializeTerm } from '../store/weather/helpers';
import { LocationSearch, ReduxStore } from '../types';

type Props = {
	location: LocationSearch;
};

export default function PinnedWeatherInfo({ location }: Props) {
	const details = useSelector((state: ReduxStore) => selectors.getWeatherForTerm(serializeTerm(location), state));
	const dispatch = useDispatch();

	usePeriodicReload(
		() => {
			dispatch(actions.fetchWeather(location.city, location.state, true));
		},
		60e3,
		[location.city, location.state, dispatch]
	);

	return (
		<WeatherInfo
			weather={details}
			location={location}
			onClick={() => {
				dispatch(push(`/weather/${location.city}|${location.state}`));
			}}
		/>
	);
}
