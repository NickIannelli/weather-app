import { BaseAction } from './types';

export const serializeTerm = ({ city, state }: BaseAction) => `${city}|${state}`;
