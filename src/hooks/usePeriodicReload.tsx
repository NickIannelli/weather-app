import React from 'react';

export default function usePeriodicReload(fn: () => void, timeout: number, propsArray: any[]) {
	const timer = React.useRef<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		timer.current = setInterval(fn, timeout);

		return () => {
			clearInterval(timer.current!);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [...propsArray, fn, timeout]);
}
