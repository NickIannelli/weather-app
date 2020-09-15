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
