import { push } from 'connected-react-router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { actions, selectors } from '../../store/weather';

export default function WeatherPage({
	computedMatch: {
		params: { location }
	}
}: any) {
	const [city, state] = location.split('|');
	const dispatch = useDispatch();
	const details = useSelector(selectors.getActiveWeather);

	const { fields, handleSubmit } = useForm({
		initialValues: {
			city,
			state
		},
		fields: ['city', 'state']
	});

	// Handle page changes
	// - The selected location is controlled via the URL, this is to ensure that no matter
	//     what the URL & data on page is in sync.
	React.useEffect(() => {
		if (!city || !state) {
			dispatch(push('/'));
		}
		dispatch(actions.fetchWeather(city, state));
	}, [city, state, dispatch]);

	return (
		<main>
			This is a WeatherPage
			<form
				action="#"
				onSubmit={handleSubmit(values => {
					dispatch(push(`/weather/${values.city}|${values.state}`));
				})}
			>
				<input type="text" {...fields.city} />
				<input type="text" {...fields.state} />
				<button type="submit">Go</button>
			</form>
			<pre>{JSON.stringify(details, null, 4)}</pre>
		</main>
	);
}
