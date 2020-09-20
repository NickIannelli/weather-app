import { LocationSearch } from './types';

export const WeatherApiUrl = '//api.openweathermap.org/data/2.5/weather';

export const defaultCities: LocationSearch[] = [
	{
		state: 'VIC',
		city: 'Melbourne'
	},
	{
		state: 'NSW',
		city: 'Sydney'
	},
	{
		state: 'QLD',
		city: 'Brisbane'
	},
	{
		state: 'ACT',
		city: 'Canberra'
	},
	{
		state: 'NT',
		city: 'Darwin'
	},
	{
		state: 'SA',
		city: 'Adelaide'
	},
	{
		state: 'WA',
		city: 'Perth'
	},
	{
		state: 'TAS',
		city: 'Hobart'
	}
];
