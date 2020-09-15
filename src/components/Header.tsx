import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReduxPageConfig } from '../types';

const useStyles = createUseStyles({
	header: {
		backgroundColor: 'red'
	}
});

export default function Header(props: ReduxPageConfig) {
	const classes = useStyles();
	return <header className={classes.header}>This is the header</header>;
}
