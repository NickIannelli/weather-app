import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
	backgroundDay: {
		display: 'flex',
		flexDirection: 'column',
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		justifyContent: 'center'
	},
	content: {
		textAlign: 'center',
		margin: '-20vh auto 0',
		width: 'calc(100% - 40px)'
	},
	logoImage: {
		filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))',
		width: '80px',
		height: '80px'
	}
});

export default function NotFoundPage() {
	const classes = useStyles();

	return (
		<div className={classes.backgroundDay}>
			<div className={classes.content}>
				<img src="/images/sun.svg" className={classes.logoImage} alt="" />
				<h1>404 - Page Not Found</h1>
				<p>
					The page you are looking for doesn't seem to exist!
					<br />
					Try heading to the{' '}
					<Link to="/" style={{ color: 'white' }}>
						homepage
					</Link>{' '}
					and trying again.
				</p>
			</div>
		</div>
	);
}
