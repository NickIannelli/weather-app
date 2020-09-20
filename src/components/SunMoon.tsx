import React from 'react';
import { createUseStyles } from 'react-jss';
import sun from '../images/sun.svg';
import moon from '../images/half-moon.svg';

type Props = React.HTMLProps<HTMLDivElement> & {
	isMoon?: boolean;
};

const useStyles = createUseStyles({
	sunContainer: {
		transition: 'opacity 1.4s ease'
	},
	sun: {
		position: 'fixed',
		opacity: 0.7,
		top: '-60px',
		left: '-60px',
		width: '150px'
	}
});

export default function Sun({ isMoon, ...props }: Props) {
	const classes = useStyles();

	return (
		<div className={classes.sunContainer} {...props}>
			<img src={isMoon ? moon : sun} alt="" className={classes.sun} />
		</div>
	);
}
