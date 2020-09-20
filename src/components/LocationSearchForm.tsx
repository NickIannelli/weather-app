import React, { forwardRef, useImperativeHandle } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import useForm, { fakeEvent } from '../hooks/useForm';
import { isTouchDevice } from '../helpers/device';
import { createUseStyles } from 'react-jss';
import { WeatherTheme } from '../theme';

const states = ['-', 'NSW', 'NT', 'QLD', 'SA', 'TAS', 'VIC', 'WA'];

type Props = {
	initialValues?: {
		[key: string]: string;
	};
};

export type LocationImperativeHandle = {
	updateValues: (values: { [keyname: string]: string }) => void;
};

const useStyles = createUseStyles<WeatherTheme>(theme => ({
	container: {
		display: 'flex',
		width: '100%',
		maxWidth: '660px',
		margin: '0 auto'
	},
	citySearch: {
		flex: '4 1 40px',
		width: '0'
	},
	stateDropdown: {
		flex: '0 0 80px',
		width: '0'
	},
	searchButton: {
		flex: '1 1 40px',
		width: '0',
		maxWidth: '100px',
		fontWeight: 'bold'
	}
}));

export default forwardRef<LocationImperativeHandle, Props>(function LocationSearchForm(
	{ initialValues = { city: '', state: '-' } },
	ref
) {
	const dispatch = useDispatch();
	const classes = useStyles();

	const { fields, handleSubmit } = useForm({
		initialValues,
		fields: ['city', 'state']
	});

	useImperativeHandle(ref, () => ({
		updateValues: values => {
			Object.keys(values).forEach(fieldName => {
				fields[fieldName].onChange(fakeEvent({ target: { value: values[fieldName] } }));
			});
		}
	}));

	const onSubmit = React.useCallback(
		values => {
			if (!values.city || !values.state) {
				// @TODO - Some sort of toast/mark field as error
				return;
			}

			if (document.activeElement && isTouchDevice()) {
				// If the device is touch enabled, the keyboard should slide away so the content can be seen
				//   This is frustrating on desktop though, so enabled only for touch devices.
				(document.activeElement as HTMLInputElement).blur();
			}
			dispatch(push(`/weather/${values.city}|${values.state}`));
		},
		[dispatch]
	);

	return (
		<form action="#" onSubmit={handleSubmit(onSubmit)} className={classes.container}>
			<input
				placeholder="City/Suburb"
				aria-label="Enter a city or suburb to search"
				className={classes.citySearch}
				type="text"
				{...fields.city}
			/>
			<select className={classes.stateDropdown} {...fields.state} aria-label="Select a state">
				{states.map(state => (
					<option value={state} key={state}>
						{state}
					</option>
				))}
			</select>
			<button className={classes.searchButton} type="submit" aria-label="Search">
				Go
			</button>
		</form>
	);
});
