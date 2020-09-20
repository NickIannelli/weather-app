import React from 'react';
import { createUseStyles } from 'react-jss';
import useWindowSize from '../hooks/useWindowSize';
import cloud from '../images/cloud.png';

const useStyles = createUseStyles({
	cloudContainer: {
		transition: 'opacity 1.4s ease'
	},
	clouds: {
		position: 'fixed',
		opacity: 0.7,
		animation: '15s ease-in-out 0s infinite running both $shiftLeft'
	},

	'@keyframes shiftLeft': {
		'0%': {
			transform: 'translate3d(0, 0, 0)'
		},
		'30%': {
			transform: 'translate3d(50px, 0, 0)'
		},
		'100%': {
			transform: 'translate3d(0, 0, 0)'
		}
	}
});

export default function Clouds(props: React.HTMLProps<HTMLDivElement>) {
	const { width } = useWindowSize();
	const classes = useStyles();

	return (
		<div className={classes.cloudContainer} {...props}>
			{Array.from({ length: Math.ceil(width / 700) }, (_, i) => (
				<img
					key={i}
					src={cloud}
					alt=""
					className={classes.clouds}
					style={{ left: `${i * 700 - 200}px`, top: `${(((i + 1) % 2) + 1) * -60}px`, animationDelay: `${i * 600}ms` }}
				/>
			))}
		</div>
	);
}
