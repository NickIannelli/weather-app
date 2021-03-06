import { LocationSearch, ReduxStore } from '../../types';

export const isLocationPinned = (location: LocationSearch, state: ReduxStore) => {
	const { pinnedLocations } = state.user;

	return !!pinnedLocations.find(({ city, state }) => city === location.city && state === location.state);
};
