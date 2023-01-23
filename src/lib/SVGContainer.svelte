<script>
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

	export let name = 'QuestionMark';
	export let activeColor = 'green';
	export let inactiveColor = 'gray';

	let SVGActive = false;
	$: fillColor = SVGActive ? activeColor : inactiveColor;

	function toggleActive() {
		SVGActive = !SVGActive;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<g on:click={toggleActive} fill={fillColor}>
	<slot />
</g>
