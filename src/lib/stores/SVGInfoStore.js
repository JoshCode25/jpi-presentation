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

export let SVGInfoStore = writable({
	Books: {
		name: 'Books',
		component: Books,
		displayText: 'Technical Library',
		activeColor: 'red',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '600',
		svgY: '800',
	},
	Community: {
		name: 'Community',
		component: Community,
		displayText: 'Community Growth',
		activeColor: 'green',
		svgWidth: '350',
		svgHeight: '350',
		svgX: '600',
		svgY: '350',
	},
	Manager: {
		name: 'Manager',
		component: Manager,
		displayText: 'Experienced Employees',
		activeColor: 'gold',
		svgWidth: '175',
		svgHeight: '175',
		svgX: '250',
		svgY: '0',
	},
	Outreach: {
		name: 'Outreach',
		component: Outreach,
		displayText: 'SEO/Outreach',
		activeColor: 'blue',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '450',
		svgY: '1100',
	},
	PersonalGrowth: {
		name: 'PersonalGrowth',
		component: PersonalGrowth,
		displayText: 'Employee Growth',
		activeColor: 'green',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '700',
		svgY: '200',
	},
	QuestionMark: {
		name: 'QuestionMark',
		component: QuestionMark,
		displayText: 'Community Growth',
		activeColor: 'green',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '350',
		svgY: '275',
	},
	Student: {
		name: 'Student',
		component: Student,
		displayText: 'Green Employees',
		activeColor: 'lightgreen',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '0',
		svgY: '250',
	},
	TechnicalLibrary: {
		name: 'TechnicalLibrary',
		component: TechnicalLibrary,
		displayText: 'Technical Library',
		activeColor: 'lightblue',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '700',
		svgY: '1100',
	},
	Training: {
		name: 'Training',
		component: Training,
		displayText: 'Intentional Training',
		activeColor: 'orange',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '350',
		svgY: '550',
	},
	Why: {
		name: 'Why',
		component: Why,
		displayText: 'The Why',
		activeColor: 'purple',
		svgWidth: '200',
		svgHeight: '200',
		svgX: '150',
		svgY: '850',
	},
});
