import { ErrorResponse, WeatherResponseItem } from '../../types';

export type BaseAction = {
	city: string;
	state: string;
	silent?: boolean;
};

export type RequestAction = BaseAction;
export type SuccessAction = BaseAction & { data: WeatherResponseItem };
export type FailureAction = BaseAction & { error: ErrorResponse };
