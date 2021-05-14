

<script>
	let buttonProps = {
	id:[$$restProps.id]
	}
</script>
	<button class="md:text-sm lg:text-sm text-base w-full lg:w-3/4  justify-items-center py-2 align-center transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase rounded-full hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none "
	on:click
			on:mouseover
			on:mouseenter
			on:mouseleave
		{...buttonProps}>
			<slot/>
	</button>

<style>
	
</style>



  
  