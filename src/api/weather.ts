import Axios from 'axios';
import { WeatherApiUrl } from '../constants';
import { ErrorResponse, WeatherResponseItem } from '../types';

type WeatherRequestItem = {
	city: string;
	state: string;
	units?: string;
};

export default async function getWeather({
	city,
	state,
	units = 'metric'
}: WeatherRequestItem): Promise<WeatherResponseItem | ErrorResponse> {
	if (!process.env.REACT_APP_OW_API_KEY) {
		return {
			code: 400,
			message: 'Missing required item from config OW_API_KEY',
			isError: true
		};
	}

	try {
		const queryString = [city, state.replace('-', ''), 'AU'].filter(Boolean).join(',');

		const response = await Axios.get(
			`${WeatherApiUrl}?q=${queryString}&units=${units}&appid=${process.env.REACT_APP_OW_API_KEY}`
		);
		if (response.status === 200) {
			return response.data as WeatherResponseItem;
		} else {
			return {
				code: response.status,
				message: response.statusText,
				isError: true
			};
		}
	} catch (e) {
		return {
			code: 500,
			message: e.message,
			isError: true
		};
	}
}
