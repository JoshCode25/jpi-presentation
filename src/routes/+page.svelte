<script>
	import SvgContainer from '$lib/SVGContainer.svelte';
	import { SVGInfoStore } from '../Store.js';

	let svgNames = Object.keys($SVGInfoStore);
	const svgDefaultViewBox = 1200;
	let clientWidth = 1200;
	$: viewBoxSize = Math.pow(svgDefaultViewBox, 2) / clientWidth;
	$: console.log(clientWidth, viewBoxSize);
</script>

<div bind:clientWidth>
	<svg
		width="100%"
		height="100%"
		version="1.1"
		viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
		xmlns="http://www.w3.org/2000/svg"
	>
		{#each svgNames as svgName}
			<SvgContainer name={svgName} {viewBoxSize} />
		{/each}
	</svg>
</div>

<!--
<svg width="200" height="200" viewBox="0 0 100 100">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg>


<svg width="200" height="200" viewBox="0 0 400 400">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg>

<svg width="200" height="200" viewBox="0 0 200 200">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg> -->
