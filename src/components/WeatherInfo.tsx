import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import usePeriodicReload from '../hooks/usePeriodicReload';
import { WeatherTheme } from '../theme';
import { WeatherResponseItem } from '../types';

const useStyles = createUseStyles<WeatherTheme>(theme => ({
	background: {
		...theme.effects.glassPane(5),
		position: 'relative',
		display: 'flex',
		margin: theme.spacing.get(4, 2),
		padding: theme.spacing.get(1, 2),
		background: 'rgba(2, 150, 125, 0.1)',
		borderRadius: theme.curvature.large,
		color: color => color,
		transition: 'color 0.5s ease'
	},

	icon: {
		flex: '0 0 50px',
		alignSelf: 'center',
		minHeight: '50px'
	},

	container: {
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing.get(0, 2),
		overflow: 'hidden',

		'& h1, & h2, & p': {
			margin: 0,
			lineHeight: theme.typography.lineHeight,
			textShadow: '0 2px 5px rgba(255, 255, 255, 0.2)'
		},

		'& h1': {
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis'
		}
	},

	subtleText: {
		opacity: 0.5
	}
}));

const unit = '°';

export default function WeatherInfo(props: WeatherResponseItem) {
	const [now, setNow] = React.useState(Date.now());

	usePeriodicReload(
		() => {
			setNow(Date.now());
		},
		30e3,
		[setNow]
	);

	const dayNightCycle = getTintOpacity(props, now);
	const color = dayNightCycle > 0.2 ? 'white' : 'black';
	const classes = useStyles(color);

	if (!props.base) return null; // no Dynamic background without anything to display...

	return (
		<div className={classes.background}>
			{/* Look to migrate to https://websygen.github.io/owfont/ */}
			<img className={classes.icon} src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} alt="" />
			<div className={classes.container}>
				<h1>{props.name}</h1>
				<p className={classes.subtleText}>
					Low: {Math.round(props.main.temp_min)}
					{unit} | High: {Math.round(props.main.temp_max)}
					{unit}
				</p>
			</div>
			<h2>
				{Math.round(props.main.temp)}
				{unit}
			</h2>
		</div>
	);
}
