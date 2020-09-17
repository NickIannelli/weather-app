import React from 'react';

export default function useWindowSize() {
	const [dimensions, setDimensions] = React.useState(document.documentElement.getBoundingClientRect());

	const handleResize = React.useCallback(() => {
		setDimensions(document.documentElement.getBoundingClientRect());
	}, [setDimensions]);

	React.useEffect(() => {
		window.addEventListener('resize', handleResize);
		window.addEventListener('orientationchange', handleResize);
	}, [handleResize]);
	return dimensions;
}
