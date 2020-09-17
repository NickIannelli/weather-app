import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import { WeatherResponseItem } from '../types';

const useStyles = createUseStyles(theme => ({
	background: {
		position: 'relative',
		display: 'flex',
		margin: '20px 10px',
		background: 'rgba(255, 255, 255, 0.1)',
		backdropFilter: 'blur(8px) grayscale(0.8)',
		borderRadius: '10px',
		color: color => {
			console.log('color: ', color);
			return color;
		},
		transition: 'color 0.5s ease',
		boxShadow:
			'inset 0 -5px 15px -2px rgba(255, 255, 255, 0.6), 0 0 3px 0 rgba(0, 0, 0, 0.3), 0 2px 5px -2px rgba(0, 0, 0, 0.8)',

		'&::before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: '5px',
			left: '5px',
			right: '5px',
			height: '5px',
			background: 'white',
			borderRadius: '5px',
			opacity: 0.5,
			filter: 'blur(3px)'
		}
	},

	icon: {
		flex: '0 0 50px',
		alignSelf: 'center',
		margin: '10px',
		minHeight: '50px'
	}
}));

const unit = '°';

export default function WeatherInfo(props: WeatherResponseItem) {
	const dayNightCycle = getTintOpacity(props);
	const color = dayNightCycle > 0.2 ? 'white' : 'black';
	const classes = useStyles(color);

	if (!props.base) return null; // no Dynamic background without anything to display...

	return (
		<div className={classes.background}>
			{/* Look to migrate to https://websygen.github.io/owfont/ */}
			<img className={classes.icon} src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt="" />
			<h2>
				{Math.round(props.main.temp)}
				{unit}
			</h2>
			<p>
				Low: {Math.round(props.main.temp_min)}
				{unit} | High: {Math.round(props.main.temp_max)}
				{unit}
			</p>
		</div>
	);
}
