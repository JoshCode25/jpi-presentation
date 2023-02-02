<script>
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';

	export let name = 'QuestionMark';

	const inactiveColor = 'gray';
	$: svgInfo = $SVGInfoStore[name];
	$: ({ component, displayText, activeColor, svgWidth, svgHeight, svgX, svgY } =
		svgInfo);

	let SVGActive = false;
	$: fillColor = SVGActive ? activeColor : inactiveColor;

	function toggleActive() {
		SVGActive = !SVGActive;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<g on:click={toggleActive} fill={fillColor}>
	<svelte:component
		this={component}
		width={svgWidth}
		height={svgHeight}
		x={svgX}
		y={svgY}
	/>
</g>
