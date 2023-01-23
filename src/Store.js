import { writable } from 'svelte/store';

function createSVGInfoStore() {
	const SVGInfoStore = writable({
		Books: {
			name: 'Books',
			displayText: 'Technical Library',
			activeColor: 'red',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '100',
			svgY: '100',
		},
		Community: {
			name: 'Community',
			displayText: 'Community Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '300',
			svgY: '300',
		},
		Manager: {
			name: 'Manager',
			displayText: 'Experienced Employees',
			activeColor: 'gold',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '500',
			svgY: '500',
		},
		Outreach: {
			name: 'Outreach',
			displayText: 'SEO/Outreach',
			activeColor: 'blue',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '700',
			svgY: '700',
		},
		PersonalGrowth: {
			name: 'PersonalGrowth',
			displayText: 'Employee Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '900',
			svgY: '900',
		},
		QuestionMark: {
			name: 'QuestionMark',
			displayText: 'Community Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '900',
			svgY: '100',
		},
		Student: {
			name: 'Student',
			displayText: 'Green Employees',
			activeColor: 'lightgreen',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '900',
			svgY: '300',
		},
		TechnicalLibrary: {
			name: 'TechnicalLibrary',
			displayText: 'Technical Library',
			activeColor: 'lightblue',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '900',
			svgY: '500',
		},
		Training: {
			name: 'Training',
			displayText: 'Intentional Training',
			activeColor: 'orange',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '900',
			svgY: '700',
		},
		Why: {
			name: 'Why',
			displayText: 'The Why',
			activeColor: 'purple',
			svgWidth: '200',
			svgHeigt: '200',
			svgX: '700',
			svgY: '100',
		},
	});

	const keys = Object.keys(SVGInfoStore);

	return {
		subscribe: SVGInfoStore.subscribe,
	};
}

export const SVGInfoStore = createSVGInfoStore();
