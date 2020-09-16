import { BaseAction } from './types';

export const serializeTerm = ({ city, state }: BaseAction) => `${city.toLowerCase()}|${state.toLowerCase()}`;
