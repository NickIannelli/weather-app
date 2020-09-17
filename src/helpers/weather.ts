import { WeatherResponseItem } from '../types';

export const getTimes = ({
	sys: { sunrise, sunset } = { sunrise: 0, sunset: 0, type: 0, id: 0 }
}: WeatherResponseItem) => ({
	sunrise: sunrise,
	sunset: sunset,
	// Times are missing the last 3 digits as it only goes to minute -> Update the now to be the same units
	now: Date.now() / 1000
});

export const getTintOpacity = (props: WeatherResponseItem) => {
	const { sunrise, sunset, now } = getTimes(props);

	// Before sunrise - still dark outside
	if (now < sunrise - 30) {
		return 1;
	}

	// Progressively get lighter for the first hour of the morning
	if (now < sunrise + 30) {
		return 1 - ((now - (sunrise - 30)) / 60) * 1;
	}

	// The sun has set, back to dark
	if (now > sunset + 30) {
		return 1;
	}

	if (now > sunset - 30) {
		return ((now - sunset + 30) / 60) * 1;
	}

	return 0;
};
