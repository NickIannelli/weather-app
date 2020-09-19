import { memoize } from 'lodash';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import usePeriodicReload from '../hooks/usePeriodicReload';
import useWindowSize from '../hooks/useWindowSize';
import { WeatherTheme } from '../theme';
import { WeatherResponseItem } from '../types';
import Clouds from './Clouds';
import Rain from './Rain';

const baseBackground = {
	transition: 'all 1.5s ease-in-out',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: -1,
	pointerEvents: 'none',

	'& *': {
		pointerEvents: 'none'
	}
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

/**
 * id codes from https://websygen.github.io/owfont/#
 *   2xx = thunderstorms
 *   3xx = drizzle
 *   4xx = - unused -
 *   5xx = rainy
 *   6xx = snow
 *   7xx = atomspheric issues
 *   800 = normal
 *   80x = cloudy
 * */
const getIsRainy = (props: WeatherResponseItem) => props.weather.some(item => item.id > 200 && item.id < 600);

const getIsCloudy = (props: WeatherResponseItem) =>
	getIsRainy(props) || props.weather.some(item => item.id >= 801 && item.id <= 804);

export default function DynamicWeatherBackground(props: WeatherResponseItem) {
	const classes = useStyles();
	const [now, setNow] = React.useState(Date.now());

	usePeriodicReload(
		() => {
			setNow(Date.now());
		},
		30e3,
		[setNow]
	);

	if (!props.base) return <div className={classes.backgroundDay} />; // no Dynamic background without anything to display...

	const isCloudy = getIsCloudy(props);
	const isRainy = getIsRainy(props);

	return (
		<div className={classes.backgroundDay}>
			<div className={classes.backgroundNight} style={{ opacity: getTintOpacity(props, now) * 0.9 }} />
			{isCloudy && <Clouds />}
			{isRainy && <Rain />}
		</div>
	);
}
