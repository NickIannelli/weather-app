type Colors = 'dayBlue' | 'nightBlue' | 'white';
type Effects = 'frostedGlass';

export type WeatherTheme = {
	color: {
		[colorValue in Colors]: string;
	};
	spacing: {
		unit: number;
		get: (...units: number[]) => string;
	};
	effects: {
		[effectName in Effects]: object;
	} & {
		glassPane: (size: number) => object;
	};
	curvature: {
		small: string;
		large: string;
	};
	typography: {
		lineHeight: string;
		small: string;
		medium: string;
		input: string;
		large: string;
	};
};

const theme: WeatherTheme = {
	color: {
		dayBlue: '#78acff',
		nightBlue: '#131319',
		white: '#fff'
	},
	spacing: {
		unit: 5,
		get(...units: number[]) {
			return units.map(unit => `${5 * unit}px`).join(' ');
		}
	},
	curvature: {
		small: '5px',
		large: '10px'
	},
	typography: {
		lineHeight: '1.4em',
		small: '10px',
		medium: '14px',
		input: '16px',
		large: '22px'
	},
	effects: {
		frostedGlass: {
			backdropFilter: 'blur(8px) grayscale(0.8)'
		},

		glassPane(size: number) {
			const halfSize = Math.floor(size / 2);
			const thirdSize = Math.floor(size / 3);

			const insetShadow = `inset 0 -${size}px ${size * 3}px -${halfSize}px rgba(255, 255, 255, 0.6)`;
			const borderShadow = `0 0 ${thirdSize}px 0 rgba(0, 0, 0, 0.3)`;
			const dropShadow = `0 ${halfSize}px ${size}px -${halfSize}px rgba(0, 0, 0, 0.8)`;

			return {
				boxShadow: `${insetShadow}, ${borderShadow}, ${dropShadow}`,

				'&::before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					top: size,
					left: size,
					right: size,
					height: size,
					background: 'white',
					borderRadius: `${size}px`,
					opacity: 0.5,
					filter: 'blur(3px)'
				}
			};
		}
	}
};

export default theme;
