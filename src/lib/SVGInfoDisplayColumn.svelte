<script>
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';
	import SVGInfoDisplay from '$lib/SVGInfoDisplay.svelte';
</script>

<div>
	{#each Object.keys($SVGInfoStore) as svgName}
		<SVGInfoDisplay name={svgName} />
	{/each}
</div>
