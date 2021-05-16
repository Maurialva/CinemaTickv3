<script>
	import Customhead from '../components/Customhead.svelte';
import Nav from '../components/Nav.svelte';
import Customfooter from '../components/Customfooter.svelte';


/*	export let segment;*/
</script>




<body class="bg-gray-200"><container>
	<Customhead/>
</container>
<main class="block ">
	<section class="w-full justify-center block">
		<slot></slot>
	</section>
</main>
<Customfooter/>

	
</body>