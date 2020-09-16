import React from 'react';
import { createUseStyles } from 'react-jss';
import { WeatherResponseItem } from '../types';

const useStyles = createUseStyles({
	background: {
		position: 'relative',
		display: 'inline-flex',
		margin: '20px auto',
		flexDirection: 'column',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'rgba(255, 255, 255, 0.1)',
		backdropFilter: 'blur(8px) grayscale(0.8)',
		borderRadius: '10px',
		boxShadow:
			'inset 0 -5px 15px -2px rgba(255, 255, 255, 0.6), 0 0 3px 0 rgba(0, 0, 0, 0.3), 0 2px 5px -2px rgba(0, 0, 0, 0.8)',

		'&::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: '5px',
			left: '10%',
			width: '80%',
			height: '5px',
			background: 'white',
			borderRadius: '5px',
			opacity: 0.5,
			filter: 'blur(3px)'
		}
	}
});

export default function WeatherInfo(props: WeatherResponseItem) {
	const classes = useStyles();

	if (!props.base) return null; // no Dynamic background without anything to display...

	return (
		<div style={{ textAlign: 'center' }}>
			<div className={classes.background}>
				<h2>{Math.round(props.main.temp)}&deg;</h2>
				<p>
					Low: {Math.round(props.main.temp_min)} | High: {Math.round(props.main.temp_max)}
				</p>
			</div>
		</div>
	);
}
