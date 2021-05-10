<script>
	import Customhead from '../components/Customhead.svelte';
import Nav from '../components/Nav.svelte';
import Customfooter from '../components/Customfooter.svelte';

	export let segment;
</script>


<body>
	

<main>
	<Customhead/>
	<slot></slot>

	<Customfooter/>
<!--
	<Nav {segment}/>-->
</main>
</body>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: lightgray;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 50px;
	}
	body
	{
background-color: #449fad;

	}
</style>