<script>
	import { SVGInfoStore } from '$lib/stores/SVGInfoStore.js';

	export let name;

	//remove svg property names that shouldn't be displayed/edited
	const hiddenLabelNames = ['name', 'component'];
	const labelNames = Object.keys($SVGInfoStore[name]).filter(
		(keyName) => !hiddenLabelNames.includes(keyName)
	);
</script>

{#if name}
	<div>
		<h3>{name}</h3>
		<ul>
			{#each labelNames as labelName}
				<li>
					{labelName}:
					<input
						on:input={(value) =>
							SVGInfoStore.updateValue(name, labelName, value)}
						bind:value={$SVGInfoStore[name][labelName]}
					/>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	h3 {
		margin: 5px;
	}
	ul {
		margin: 5px 10px;
		padding: 0;
		display: flex;
		flex-flow: row wrap;
	}
	li {
		list-style-type: none;
	}
	input {
		width: 150px;
		border: 1px solid white;
	}
	input:hover {
		border: 1px solid black;
		cursor: text;
	}
</style>
