import React from 'react';
import { LiveMessage } from 'react-aria-live';
import { createUseStyles } from 'react-jss';
import { getTintOpacity } from '../helpers/weather';
import { toSentenceCase } from '../helpers/string';
import usePeriodicReload from '../hooks/usePeriodicReload';
import { WeatherTheme } from '../theme';
import { LocationSearch, ReduxStore, WeatherResponseItem } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import Star from './Star';
import { selectors as userSelectors, actions as userActions } from '../store/user';
import { notButton } from '../style/utilities';
import { getActiveWeather } from '../store/weather/selectors';

type Props = React.HTMLProps<HTMLDivElement> & {
	weather: WeatherResponseItem;
	isActive?: boolean;
	location: LocationSearch;
};

const useStyles = createUseStyles<WeatherTheme>(theme => ({
	outerContainer: {
		maxWidth: theme.spacing.contentWidth,
		margin: theme.spacing.get(0, 'auto'),
		cursor: ({ isActive }) => (isActive ? 'auto' : 'pointer'),

		'& > *': {
			opacity: ({ isActive }) => (isActive ? 1 : 0.5)
		}
	},
	container: {
		...theme.effects.glassPane(5),
		position: 'relative',
		display: 'flex',
		margin: theme.spacing.get(4, 2),
		padding: theme.spacing.get(1, 2),
		background: 'rgba(2, 150, 125, 0.1)',
		borderRadius: theme.curvature.large,
		color: ({ color }) => color,
		transition: 'color 1.4s ease',
		transitionDelay: '0.3s',

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

	rightActions: {
		display: 'flex',
		flex: '0 0 auto',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	subtleText: {
		paddingTop: '0.5em',
		opacity: 0.5
	},

	notButton: notButton()
}));

const unit = '°';
const displayUnit = (value: number) => `${Math.round(value)}${unit}`;

const getAriaMessage = ({ location: { city }, weather: { main, weather } }: Props) => {
	const temp = displayUnit(main.temp);
	const tempMax = displayUnit(main.temp_max);
	const tempMin = displayUnit(main.temp_min);
	const tempFeels = displayUnit(main.feels_like);
	return `The weather in ${city} is currently ${temp} with ${weather[0].description}.
	${tempFeels !== temp ? `It feels like ${tempFeels}.` : ''}
	${tempMin !== tempMax ? `It is a top of ${tempMax} and a low of ${tempMin}` : ''}`;
};
export default function WeatherInfo(props: Props) {
	const { location, isActive, weather: weatherProp, ...element } = props;
	const [now, setNow] = React.useState(Date.now());
	const dispatch = useDispatch();
	const isPinned = useSelector((state: ReduxStore) => userSelectors.isLocationPinned(location, state));
	const activeWeather = useSelector(getActiveWeather);

	usePeriodicReload(
		() => {
			setNow(Date.now());
		},
		30e3,
		[setNow]
	);

	const dayNightCycle = getTintOpacity(activeWeather, now);
	const color = dayNightCycle > 0.2 ? 'white' : 'black';
	const classes = useStyles({ color, isActive: isActive });

	if (!weatherProp || !weatherProp.base) return null; // no Dynamic background without anything to display...
	const { weather, name, main } = weatherProp;

	return (
		<div
			{...element}
			className={[classes.outerContainer, element.className].filter(Boolean).join(' ')}
			tabIndex={0}
			aria-label={getAriaMessage(props)}
		>
			<LiveMessage message={getAriaMessage(props)} aria-live={isActive ? 'assertive' : 'polite'} />
			<div className={classes.container}>
				<img className={classes.icon} src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
				<div className={classes.content}>
					<h1>{name}</h1>
					<p>
						{toSentenceCase(weather[0].description)}. Feels like {displayUnit(main.feels_like)}
					</p>
					<p className={classes.subtleText}>
						Low: {displayUnit(main.temp_min)} | High: {displayUnit(main.temp_max)}
					</p>
				</div>
				<div className={classes.rightActions}>
					<h2>{displayUnit(main.temp)}</h2>
					<button
						onClick={() => {
							if (isPinned) {
								dispatch(userActions.unpinLocation(location.city, location.state));
							} else {
								dispatch(userActions.pinLocation(location.city, location.state));
							}
						}}
						type="button"
						className={classes.notButton}
						aria-label={isPinned ? `Unpin ${location.city} location` : `Pin ${location.city} for quick access`}
					>
						<Star isFilled={isPinned} size={2} />
					</button>
				</div>
			</div>
		</div>
	);
}
