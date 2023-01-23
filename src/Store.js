import { Writable } from 'svelte/store';

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
		svgX: '100',
		svgY: '100',
	},
});
