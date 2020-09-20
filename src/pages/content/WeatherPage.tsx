import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import DynamicWeatherBackground from '../../components/DynamicWeatherBackground';
import LocationSearchForm, { LocationImperativeHandle } from '../../components/LocationSearchForm';
import WeatherInfo from '../../components/WeatherInfo';
import PinnedWeatherInfo from '../../containers/PinnedWeatherInfo';
import usePeriodicReload from '../../hooks/usePeriodicReload';
import { actions, selectors } from '../../store/weather';
import { WeatherTheme } from '../../theme';
import { ReduxStore } from '../../types';

const useStyles = createUseStyles((theme: WeatherTheme) => ({
	fixedSearchForm: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		padding: theme.spacing.get(1),
		zIndex: 1,
		backdropFilter: 'blur(8px)',
		boxShadow: '0 4px 4px -1px rgba(0, 0, 0, 0.3)'
	},
	content: {
		marginTop: '80px', // refers to the overall height of the search form
		paddingBottom: '80px'
	}
}));

export default function WeatherPage({
	computedMatch: {
		params: { location }
	}
}: any) {
	const classes = useStyles();
	const [city, state] = location.split('|');
	const details = useSelector(selectors.getActiveWeather);
	const pinnedLocations = useSelector((state: ReduxStore) => state.user.pinnedLocations);
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
			<div className={classes.fixedSearchForm}>
				<LocationSearchForm ref={searchForm} initialValues={{ city, state }} />
			</div>
			<div className={classes.content}>
				<WeatherInfo weather={details} location={{ city, state }} isActive />
				<DynamicWeatherBackground {...details} />
				{pinnedLocations.map(location => (
					<PinnedWeatherInfo key={`${location.city}|${location.state}`} location={location} />
				))}
			</div>
		</>
	);
}
