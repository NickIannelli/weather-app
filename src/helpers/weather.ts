import { WeatherResponseItem } from '../types';

export const getTimes = ({
	sys: { sunrise, sunset } = { sunrise: 0, sunset: 0, type: 0, id: 0 }
}: WeatherResponseItem) => ({
	// Times are missing the last 3 digits as it only goes to minute -> Update the now to be the same units
	sunrise: sunrise * 1000,
	sunset: sunset * 1000
});

const minutes30 = 30 * 60 * 1000;
const minutes60 = 60 * 60 * 1000;

export const getTintOpacity = (props: WeatherResponseItem, now: number) => {
	if (!props || !props.base) return 0;

	const { sunrise, sunset } = getTimes(props);

	// Before sunrise - still dark outside
	if (now < sunrise - minutes30) {
		return 1;
	}

	// Progressively get lighter for the first hour of the morning
	if (now < sunrise + minutes30) {
		return 1 - ((now - (sunrise - minutes30)) / minutes60) * 1;
	}

	// The sun has set, back to dark
	if (now > sunset + minutes30) {
		return 1;
	}

	if (now > sunset - minutes30) {
		return ((now - sunset + minutes30) / minutes60) * 1;
	}

	return 0;
};
