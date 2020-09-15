// To implement in the future
export type ReduxStore = any;

export type PageConfig = {
	exact: boolean;
	title: string;
	component: Function;
	showBack?: boolean;
	showMenu?: boolean;
};

export type ReduxPageConfig = Omit<PageConfig, 'component'> & {
	isActive: boolean;
};

export type ErrorResponse = {
	code: number;
	message: string;
};

export type WeatherResponseItem = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
};
