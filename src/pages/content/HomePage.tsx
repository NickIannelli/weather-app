import React from 'react';
import { createUseStyles } from 'react-jss';
import DynamicWeatherBackground from '../../components/DynamicWeatherBackground';
import LocationSearchForm from '../../components/LocationSearchForm';
import { WeatherTheme } from '../../theme';

const baseBackground = {
	transition: 'all 1.5s ease-in-out',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0
};

const useStyles = createUseStyles((theme: WeatherTheme) => ({
	backgroundDay: {
		...baseBackground,
		backgroundColor: theme.color.dayBlue
	},
	backgroundNight: {
		...baseBackground,
		backgroundColor: theme.color.nightBlue
	}
}));

export default function HomePage() {
	const classes = useStyles();

	return (
		<div className={classes.backgroundDay}>
			<h1>Weather Finder</h1>
			<LocationSearchForm initialValues={{}} />
		</div>
	);
}
