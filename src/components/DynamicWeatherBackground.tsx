import { memoize } from 'lodash';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import usePeriodicReload from '../hooks/usePeriodicReload';
import useWindowSize from '../hooks/useWindowSize';
import { WeatherTheme } from '../theme';
import { WeatherResponseItem } from '../types';
import Cloud from './Cloud';

const directions: ('left' | 'right' | 'top' | 'bottom')[] = ['left', 'right', 'top', 'bottom'];

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

const getIsCloudy = (props: WeatherResponseItem) =>
	props.weather.some(item => item.main.toLowerCase().includes('cloud'));

const getCloudArray = memoize(
	(width: number, height: number) => {
		return Array.from({ length: Math.floor(Math.sqrt(width * height) / 70) }, (_, i) => {
			const xDiff = 140 * i + (i % 3) * 20 + (i % 5) * 30;
			const x = (xDiff % width) - 40;
			const y = Math.floor(xDiff / width) * 90 + 120 + (i % 2) * 20 + (i % 3) * -30;
			return { x, y, index: i };
		});
	},
	(width, height) => `${width}|${height}`
);

export default function DynamicWeatherBackground(props: WeatherResponseItem) {
	const classes = useStyles();
	const { width, height } = useWindowSize();
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

	return (
		<div className={classes.backgroundDay}>
			<div className={classes.backgroundNight} style={{ opacity: getTintOpacity(props, now) * 0.9 }} />
			{getCloudArray(width, height).map(({ x, y, index }) => (
				<Cloud
					delay={index * 150}
					key={`${x}|${y}`}
					x={x}
					y={y}
					inDirection={directions[index % directions.length]}
					displayed={isCloudy}
				/>
			))}
		</div>
	);
}
