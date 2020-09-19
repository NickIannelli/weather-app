import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicWeatherBackground from '../../components/DynamicWeatherBackground';
import LocationSearchForm, { LocationImperativeHandle } from '../../components/LocationSearchForm';
import WeatherInfo from '../../components/WeatherInfo';
import usePeriodicReload from '../../hooks/usePeriodicReload';
import { actions, selectors } from '../../store/weather';

export default function WeatherPage({
	computedMatch: {
		params: { location }
	}
}: any) {
	const [city, state] = location.split('|');
	const details = useSelector(selectors.getActiveWeather);
	const dispatch = useDispatch();
	const searchForm = React.useRef<LocationImperativeHandle | null>(null);

	// Handle page changes
	// - The selected location is controlled via the URL, this is to ensure that no matter
	//     what the URL & data on page is in sync.
	React.useEffect(() => {
		if (!city || !state) {
			return;
		}
		dispatch(actions.fetchWeather(city, state));

		if (searchForm.current != null) {
			searchForm.current.updateValues({
				city,
				state
			});
		}
	}, [city, state, dispatch, searchForm]);

	usePeriodicReload(
		() => {
			dispatch(actions.fetchWeather(city, state));
		},
		30e3, // Every 30s - the redux store caches the values anyway, just keep it fresh
		[city, state, dispatch]
	);

	return (
		<>
			<LocationSearchForm ref={searchForm} initialValues={{ city, state }} />
			<WeatherInfo {...details} isPinned />
			<DynamicWeatherBackground {...details} />
		</>
	);
}
