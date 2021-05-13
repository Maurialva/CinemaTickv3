<script>
	import Customhead from '../components/Customhead.svelte';
import Nav from '../components/Nav.svelte';
import Customfooter from '../components/Customfooter.svelte';


/*	export let segment;*/
</script>
<container>
	<Customhead/>
</container>



<body>
<main class="block">
	<section class="w-full justify-center block">
		<slot></slot>
	</section>
</main>
<Customfooter/>

	
</body>