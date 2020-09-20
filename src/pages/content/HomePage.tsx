import { push } from 'connected-react-router';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { batch, useDispatch } from 'react-redux';
import LocationSearchForm from '../../components/LocationSearchForm';
import { defaultCities } from '../../constants';
import { actions as userActions } from '../../store/user';
import { actions as weatherActions } from '../../store/weather';
import { WeatherTheme } from '../../theme';

const useStyles = createUseStyles((theme: WeatherTheme) => ({
	backgroundDay: {
		display: 'flex',
		flexDirection: 'column',
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		justifyContent: 'center'
	},
	content: {
		textAlign: 'center',
		margin: '-20vh auto 0',
		width: 'calc(100% - 40px)'
	},
	logoImage: {
		filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))',
		width: '80px',
		height: '80px',
		userSelect: 'none'
	},
	citiesButton: {
		transition: 'all 0.3s ease',
		padding: theme.spacing.get(3, 6),
		background: 'rgba(255, 255, 255, 0.5)',
		borderRadius: theme.curvature.small,
		border: 'none',
		boxShadow: '0 3px 4px -2px rgba(0, 0, 0, 0.6)',
		fontWeight: 'bold',
		cursor: 'pointer',

		'&:hover': {
			background: 'rgba(255, 255, 255, 0.7)',
			boxShadow: '0 5px 6px -2px rgba(0, 0, 0, 0.7)'
		},

		'&:focus, &:active': {
			outline: 'none'
		}
	}
}));

export default function HomePage() {
	const classes = useStyles();
	const dispatch = useDispatch();

	const loadCapitalCities = () => {
		batch(() => {
			defaultCities.forEach(({ city, state }) => {
				dispatch(userActions.pinLocation(city, state));
				dispatch(weatherActions.fetchWeather(city, state, true));
			});
			dispatch(push(`/weather/${defaultCities[0].city}|${defaultCities[0].state}`));
		});
	};

	return (
		<div className={classes.backgroundDay}>
			<div className={classes.content}>
				<img src="/images/sun.svg" className={classes.logoImage} alt="" />
				<h1>Weather Finder</h1>
				<button type="button" onClick={loadCapitalCities} className={classes.citiesButton}>
					Australia's Capital Cities
				</button>
				<p>or</p>
				<LocationSearchForm />
			</div>
		</div>
	);
}
