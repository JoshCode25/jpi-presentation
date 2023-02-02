<script>
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';
	import SVGInfoDisplay from '$lib/SVGInfoDisplay.svelte';

	function logSVGInfoStore() {
		console.log($SVGInfoStore);
	}
</script>

<div>
	<button on:click={logSVGInfoStore}>Export Store</button>
	{#each Object.keys($SVGInfoStore) as svgName}
		<SVGInfoDisplay name={svgName} />
	{/each}
</div>

<style>
	div {
		max-height: 600px;
		overflow: auto;
	}
</style>
