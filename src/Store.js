import { writable } from 'svelte/store';

import Books from '$lib/svg/Books.svelte';
import Community from '$lib/svg/Community.svelte';
import Manager from '$lib/svg/Manager.svelte';
import Outreach from '$lib/svg/Outreach.svelte';
import PersonalGrowth from '$lib/svg/PersonalGrowth.svelte';
import QuestionMark from '$lib/svg/QuestionMark.svelte';
import Student from '$lib/svg/Student.svelte';
import TechnicalLibrary from '$lib/svg/TechnicalLibrary.svelte';
import Training from '$lib/svg/Training.svelte';
import Why from '$lib/svg/Why.svelte';

function createSVGInfoStore() {
	const SVGInfoStore = writable({
		Books: {
			name: 'Books',
			component: Books,
			displayText: 'Technical Library',
			activeColor: 'red',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '100',
			svgY: '100',
		},
		Community: {
			name: 'Community',
			component: Community,
			displayText: 'Community Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '300',
			svgY: '300',
		},
		Manager: {
			name: 'Manager',
			component: Manager,
			displayText: 'Experienced Employees',
			activeColor: 'gold',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '500',
			svgY: '500',
		},
		Outreach: {
			name: 'Outreach',
			component: Outreach,
			displayText: 'SEO/Outreach',
			activeColor: 'blue',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '700',
			svgY: '700',
		},
		PersonalGrowth: {
			name: 'PersonalGrowth',
			component: PersonalGrowth,
			displayText: 'Employee Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '900',
			svgY: '900',
		},
		QuestionMark: {
			name: 'QuestionMark',
			component: QuestionMark,
			displayText: 'Community Growth',
			activeColor: 'green',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '900',
			svgY: '100',
		},
		Student: {
			name: 'Student',
			component: Student,
			displayText: 'Green Employees',
			activeColor: 'lightgreen',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '900',
			svgY: '300',
		},
		TechnicalLibrary: {
			name: 'TechnicalLibrary',
			component: TechnicalLibrary,
			displayText: 'Technical Library',
			activeColor: 'lightblue',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '900',
			svgY: '500',
		},
		Training: {
			name: 'Training',
			component: Training,
			displayText: 'Intentional Training',
			activeColor: 'orange',
			svgWidth: '200',
			svgHeight: '200',
			svgX: '900',
			svgY: '700',
		},
		Why: {
			name: 'Why',
			component: Why,
			displayText: 'The Why',
			activeColor: 'purple',
			svgWidth: '200',
			svgHeight: '200',
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
