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
			message: 'Missing required item from config OW_API_KEY'
		};
	}

	try {
		const response = await Axios.get(
			`${WeatherApiUrl}?q=${city},${state},AU&units=${units}&appid=${process.env.REACT_APP_OW_API_KEY}`
		);
		if (response.status === 200) {
			return response.data as WeatherResponseItem;
		} else {
			return {
				code: response.status,
				message: response.statusText
			};
		}
	} catch (e) {
		return {
			code: 500,
			message: e.message
		};
	}
}
