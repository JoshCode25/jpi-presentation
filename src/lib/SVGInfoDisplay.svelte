<script>
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';

	export let name;
	console.log($SVGInfoStore[name]);
</script>

{#if name}
	<div>
		<h3>{name}</h3>
		<ul>
			<li>
				x: <input bind:value={$SVGInfoStore[name].svgX} />
			</li>
			<li>
				y: <input bind:value={$SVGInfoStore[name].svgY} />
			</li>
			<li>
				width: <input bind:value={$SVGInfoStore[name].svgWidth} />
			</li>
			<li>
				height: <input bind:value={$SVGInfoStore[name].svgHeight} />
			</li>
			<li>
				activeColor: <input bind:value={$SVGInfoStore[name].activeColor} />
			</li>
			<li>
				displayText: <input bind:value={$SVGInfoStore[name].displayText} />
			</li>
		</ul>
	</div>
{/if}

<style>
	ul {
		margin: 10px;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
	}
	li {
		list-style-type: none;
	}
	input {
		width: auto;
	}
</style>
