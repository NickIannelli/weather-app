import { push } from 'connected-react-router';
import { noop } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DynamicWeatherBackground from '../../components/DynamicWeatherBackground';
import WeatherInfo from '../../components/WeatherInfo';
import useForm from '../../hooks/useForm';
import { actions, selectors } from '../../store/weather';

const fakeEvent = (values: any): React.ChangeEvent<HTMLInputElement> => ({
	...values,
	addEventListener: noop,
	dispatchEvent: noop
});

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
			return;
		}
		dispatch(actions.fetchWeather(city, state));
		fields.city.onChange(fakeEvent({ target: { value: city } }));
		fields.state.onChange(fakeEvent({ target: { value: state } }));

		// By including the city/state fields it essentially prevents updating the field
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city, state, dispatch]);

	return (
		<>
			<form
				action="#"
				onSubmit={handleSubmit(values => {
					if (document.activeElement) {
						(document.activeElement as HTMLInputElement).blur();
					}
					dispatch(push(`/weather/${values.city}|${values.state}`));
				})}
			>
				<input type="text" style={{ marginLeft: '40px' }} {...fields.city} />
				<input type="text" style={{ width: '50px' }} {...fields.state} />
				<button type="submit">Go</button>
			</form>
			<WeatherInfo {...details} />
			<DynamicWeatherBackground {...details} />
		</>
	);
}
