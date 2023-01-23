<script>
	import SvgContainer from '$lib/SVGContainer.svelte';
	import Books from '$lib/svg/Books.svelte';
	import Community from '$lib/svg/Community.svelte';
	import Manager from '../lib/svg/Manager.svelte';
</script>

<svg
	width="100%"
	height="100%"
	version="1.1"
	viewBox="0 0 2400 2400"
	xmlns="http://www.w3.org/2000/svg"
>
	<!-- <SvgContainer
		width={100}
		height={100}
		path={SVGPaths.book}
		displayText={'Learning'}
		activeColor={'blue'}
	/>
	<SvgContainer size={200} path={SVGPaths.book} displayText={'Learning'} /> -->
	<SvgContainer activeColor={'orange'}>
		<Manager height={600} width={400} x={250} y={600} />
	</SvgContainer>
	<SvgContainer activeColor={'red'}>
		<Books height={200} width={200} x={150} y={150} />
	</SvgContainer>
	<SvgContainer activeColor={'blue'}>
		<Community height={600} width={600} x={450} y={200} />
	</SvgContainer>
</svg>

<!-- Without viewBox -->
<svg width="200" height="200" viewBox="0 0 100 100">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg>

<!-- With viewBox -->
<svg width="200" height="200" viewBox="0 0 400 400">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg>

<svg width="200" height="200" viewBox="0 0 200 200">
	<circle cx="50" cy="50" r="45" stroke="#000" stroke-width="3" fill="none" />
</svg>
