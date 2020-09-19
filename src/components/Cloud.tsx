import React from 'react';
import { Transition } from 'react-transition-group';
import { createUseStyles } from 'react-jss';

type InDirectionEnum = 'left' | 'right' | 'top' | 'bottom';

type CloudProps = {
	x: number;
	y: number;
	delay?: number;
	inDirection?: InDirectionEnum;
	displayed?: boolean;
};

const useStyles = createUseStyles({
	cloud: {
		position: 'fixed',
		left: '3vw',
		top: '20vh',
		background: '#747288',
		width: '150px',
		height: '60px',
		borderRadius: '25px',
		filter: 'blur(10px)',
		opacity: 0.8,
		transition: 'all 1.4s ease-out',
		backfaceVisibility: 'hidden',

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

const getTransform = (inDirection?: InDirectionEnum) => {
	switch (inDirection) {
		case 'left':
			return 'translate3d(-50px, 0, 0)';
		case 'right':
			return 'translate3d(50px, 0, 0)';
		case 'top':
			return 'translate3d(0, -50px, 0)';
		case 'bottom':
			return 'translate3d(0, 50px, 0)';
		default:
			return '';
	}
};

export default function Cloud({ x, y, inDirection, displayed, delay = 0 }: CloudProps) {
	const classes = useStyles();
	const transitionStyles: {
		[transition: string]: object;
	} = {
		entering: { opacity: 1, transform: 'translateX(0)' },
		entered: { opacity: 1, transform: 'translateX(0)' },
		exiting: { opacity: 0, transform: getTransform(inDirection) },
		exited: { opacity: 0, transform: getTransform(inDirection) }
	};

	return (
		<Transition timeout={delay + 1400} in={displayed}>
			{state => (
				<div
					style={{
						...transitionStyles[state],
						top: `${y}px`,
						left: `${x}px`,
						transitionDelay: `${delay}ms`,
						position: 'absolute'
					}}
					className={classes.cloud}
				/>
			)}
		</Transition>
	);
}
