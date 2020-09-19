let touchDevice: boolean;

export function isTouchDevice() {
	if (touchDevice === undefined) {
		touchDevice = 'ontouchstart' in window;
	}
	return touchDevice;
}
