import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	rainContainer: {
		transition: 'opacity 1.4s ease',
		position: 'fixed',
		top: '-100vh',
		left: '-200px',
		zIndex: -1
	},
	rain: {
		minHeight: '220vh',
		opacity: 0.7,
		animation: '0.4s linear 0s infinite running $drizzleDown'
	},

	'@keyframes drizzleDown': {
		'0%': {
			transform: 'translate3d(0, 0, 0)'
		},
		'100%': {
			transform: 'translate3d(-70px, 100vh, 0)'
		}
	}
});

export default function Rain(props: React.HTMLProps<HTMLDivElement>) {
	const classes = useStyles();

	return (
		<div
			{...props}
			className={classes.rainContainer}
			style={{
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				WebkitTransformStyle: 'preserve-3d',
				transformStyle: 'preserve-3d',
				...props.style
			}}
		>
			<img src="/images/rain.png" alt="" className={classes.rain} />
		</div>
	);
}
