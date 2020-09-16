import React from 'react';
import { createUseStyles } from 'react-jss';
import { WeatherResponseItem } from '../types';

const useStyles = createUseStyles({
	background: {
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
	},

	clouds: {
		position: 'fixed',
		left: '3vw',
		top: '20vh',
		background: '#747288',
		width: '150px',
		height: '60px',
		borderRadius: '25px',
		filter: 'blur(10px)',
		opacity: 0.8,
		transition: 'all 0.4s ease-in-out',

		'&:before': {
			content: '""',
			position: 'absolute',
			left: '25%',
			bottom: '100%',
			width: '55%',
			height: '5vh',
			background: '#747288',
			borderTopLeftRadius: '25px',
			borderTopRightRadius: '25px'
		}
	}
});

const getIsCloudy = (props: WeatherResponseItem) =>
	props.weather.some(item => item.main.toLowerCase().includes('cloud'));

const getTimes = ({ sys: { sunrise, sunset }, dt }: WeatherResponseItem) => ({
	sunrise: sunrise,
	sunset: sunset,
	// Times are missing the last 3 digits as it only goes to minute -> Update the now to be the same units
	now: Date.now() / 1000
});

// const getDaytimePercent = (props: WeatherResponseItem) => {
// 	const { sunrise, sunset, now } = getTimes(props);

// 	return (now - sunrise) / (sunset - sunrise);
// };

const getTintOpacity = (props: WeatherResponseItem) => {
	const { sunrise, sunset, now } = getTimes(props);
	const maxOpacity = 0.9;

	// Before sunrise - still dark outside
	if (now < sunrise - 30) {
		return maxOpacity;
	}

	// Progressively get lighter for the first hour of the morning
	if (now < sunrise + 30) {
		return 1 - ((now - (sunrise - 30)) / 60) * maxOpacity;
	}

	// The sun has set, back to dark
	if (now > sunset + 30) {
		return maxOpacity;
	}

	if (now > sunset - 30) {
		return ((now - sunset + 30) / 60) * maxOpacity;
	}

	return 0;
};

// const withinBounds = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function DynamicWeatherBackground(props: WeatherResponseItem) {
	const classes = useStyles();

	if (!props.base) return <div className={classes.background} style={{ background: '#78acff' }} />; // no Dynamic background without anything to display...

	const isCloudy = getIsCloudy(props);
	// const daytimePercent = getDaytimePercent(props);

	return (
		<div className={classes.background} style={{ background: '#78acff' }}>
			<div className={classes.background} style={{ background: '#131319', opacity: getTintOpacity(props) }} />
			{isCloudy && <div className={classes.clouds} />}
		</div>
	);
}
