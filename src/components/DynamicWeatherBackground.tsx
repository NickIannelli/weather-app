import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import useWindowSize from '../hooks/useWindowSize';
import { WeatherResponseItem } from '../types';
import Cloud from './Cloud';

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
	}
});

const getIsCloudy = (props: WeatherResponseItem) =>
	props.weather.some(item => item.main.toLowerCase().includes('cloud'));

const directions: ('left' | 'right' | 'top' | 'bottom')[] = ['left', 'right', 'top', 'bottom'];

export default function DynamicWeatherBackground(props: WeatherResponseItem) {
	const classes = useStyles();
	const { width, height } = useWindowSize();

	if (!props.base) return <div className={classes.background} style={{ background: '#78acff' }} />; // no Dynamic background without anything to display...

	const isCloudy = getIsCloudy(props);

	return (
		<div className={classes.background} style={{ background: '#78acff' }}>
			<div className={classes.background} style={{ background: '#131319', opacity: getTintOpacity(props) * 0.9 }} />
			{Array.from({ length: Math.floor(Math.sqrt(width * height) / 70) }, (_, i) => {
				const xDiff = 140 * i + (i % 3) * 20 + (i % 5) * 30;
				const x = (xDiff % width) - 40;
				const y = Math.floor(xDiff / width) * 90 + 120 + (i % 2) * 20 + (i % 3) * -30;

				return (
					<Cloud
						delay={i * 150}
						key={i}
						x={x}
						y={y}
						inDirection={directions[i % directions.length]}
						displayed={isCloudy}
					/>
				);
			})}
		</div>
	);
}
