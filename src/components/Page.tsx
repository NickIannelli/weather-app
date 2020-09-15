import React, { Suspense } from 'react';
import { PageConfig } from '../types';

type Props = PageConfig & {
	path: string;
};

export default function Page({ component: Component, ...props }: Props) {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...props} />
			</Suspense>
		</main>
	);
}
