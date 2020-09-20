import React from 'react';
import { createUseStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { getTintOpacity } from '../helpers/weather';
import usePeriodicReload from '../hooks/usePeriodicReload';
import { WeatherTheme } from '../theme';
import { WeatherResponseItem } from '../types';
import Clouds from './Clouds';
import Rain from './Rain';
import SunMoon from './SunMoon';

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

const fadeInTransition: {
	[state: string]: object;
} = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 }
};

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
			<Transition in={isCloudy} timeout={1400}>
				{state => <Clouds style={fadeInTransition[state]} />}
			</Transition>
			<Transition in={isRainy} timeout={1400}>
				{state => <Rain style={fadeInTransition[state]} />}
			</Transition>
			<Transition in={!isRainy && !isCloudy} timeout={1400}>
				{state => <SunMoon style={fadeInTransition[state]} isMoon={getTintOpacity(props, now) === 1} />}
			</Transition>
		</div>
	);
}
