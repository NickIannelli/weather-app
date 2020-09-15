import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/weather';

export default function HomePage() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(actions.fetchWeather('Geelong', 'Vic'));
	}, [dispatch]);

	return <main>This is a HomePage</main>;
}
