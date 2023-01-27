<script>
	import SVGContainer from '$lib/SVGContainer.svelte';
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';
	import SVGInfoDisplayColumn from '../lib/SVGInfoDisplayColumn.svelte';

	const svgDefaultViewBox = 1200;
	let clientWidth = 1200;
	$: viewBoxSize = Math.pow(svgDefaultViewBox, 2) / clientWidth;
	$: console.log(clientWidth, viewBoxSize);
</script>

<div class="grid-col">
	<section bind:clientWidth>
		<svg
			width="100%"
			height="100%"
			version="1.1"
			viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			{#each Object.keys($SVGInfoStore) as svgName}
				<SVGContainer name={svgName} />
			{/each}
		</svg>
	</section>
	<SVGInfoDisplayColumn />
</div>

<style>
	.grid-col {
		display: grid;
		grid-template-columns: 1fr 300px;
	}
</style>
