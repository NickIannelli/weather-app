import React from 'react';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import { toSentenceCase } from '../helpers/string';
import usePeriodicReload from '../hooks/usePeriodicReload';
import { WeatherTheme } from '../theme';
import { WeatherResponseItem } from '../types';

const useStyles = createUseStyles<WeatherTheme>(theme => ({
	outerContainer: {
		maxWidth: theme.spacing.contentWidth,
		margin: theme.spacing.get(0, 'auto')
	},
	container: {
		...theme.effects.glassPane(5),
		position: 'relative',
		display: 'flex',
		margin: theme.spacing.get(4, 2),
		padding: theme.spacing.get(1, 2),
		background: 'rgba(2, 150, 125, 0.1)',
		borderRadius: theme.curvature.large,
		color: color => color,
		transition: 'color 0.5s ease',

		'& h2': {
			marginTop: '12px' // random number - used to align the baseline of the font to the h1
		}
	},

	icon: {
		flex: '0 0 50px',
		alignSelf: 'flex-start',
		height: '50px',
		width: '50px'
	},

	content: {
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing.get(0, 2),
		overflow: 'hidden',

		'& h1, & p': {
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
		paddingTop: '0.5em',
		opacity: 0.5
	}
}));

const unit = '°';

export default function WeatherInfo(props: WeatherResponseItem) {
	const [now, setNow] = React.useState(Date.now());
	const displayUnit = (value: number) => `${Math.round(value)}${unit}`;

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
		<div className={classes.outerContainer}>
			<div className={classes.container}>
				<img className={classes.icon} src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="" />
				<div className={classes.content}>
					<h1>{props.name}</h1>
					<p>
						{toSentenceCase(props.weather[0].description)}. Feels like {displayUnit(props.main.feels_like)}
					</p>
					<p className={classes.subtleText}>
						Low: {displayUnit(props.main.temp_min)} | High: {displayUnit(props.main.temp_max)}
					</p>
				</div>
				<h2>
					{Math.round(props.main.temp)}
					{unit}
				</h2>
			</div>
		</div>
	);
}
