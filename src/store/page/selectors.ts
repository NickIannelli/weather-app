import { ReduxPageConfig, ReduxStore } from '../../types';

export function getPagesByAttribute<K extends keyof ReduxPageConfig>(
	attribute: K,
	value: ReduxPageConfig[typeof attribute]
) {
	return (state: ReduxStore): string[] => Object.keys(state.page).filter(key => state.page[key][attribute] === value);
}

export const getActivePage = (state: ReduxStore): ReduxPageConfig | undefined =>
	state.page[getPagesByAttribute('isActive', true)(state)[0]];

export default {
	getPagesByAttribute,
	getActivePage
};
