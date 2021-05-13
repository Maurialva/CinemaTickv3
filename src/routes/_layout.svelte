<script>
	import Customhead from '../components/Customhead.svelte';
import Nav from '../components/Nav.svelte';
import Customfooter from '../components/Customfooter.svelte';


/*	export let segment;*/
</script>


<body>
<main >
	<Customhead/>
	
	<slot></slot>

	<Customfooter/>

	<!--<Nav {segment}/>-->
</main>
</body>

<style>
	main {
		/*	
	
		
		*/
		text-align: center;
		border-radius: 50px;
		position: relative;
		max-width: 80%;
		box-sizing: border-box;
		background-color: 
		lightgray;
		padding: 2em;
		margin: 0 auto;
	}
	body
	{
		background-color: #449fad;

	}
	:global(h1){
		color: #449fad;
		color: #ffffff;
		text-transform: uppercase;
		font-family: 'Tahoma', cursive;
		text-align: center;
		font-size: 200%;
		font-weight: 1;
		text-shadow:0px 5px 10px rgba(41, 39, 39, 0.76) ;
	}
	:global(h2){
		color: #ffffff;
		text-transform: uppercase;
		font-family: 'Tahoma', cursive;
		text-align: center;
		font-size: 120%;	
		text-shadow:0px 5px 10px rgba(41, 39, 39, 0.76) ;
		font-weight: 1;
	}

	
</style>