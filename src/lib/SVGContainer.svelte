<script>
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
