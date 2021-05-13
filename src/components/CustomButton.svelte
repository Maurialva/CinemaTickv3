

<script>
	let buttonProps = {
	id:[$$restProps.id]
	}
</script>
	<button on:click
			on:mouseover
			on:mouseenter
			on:mouseleave
		{...buttonProps}>
			<slot/>
	</button>

<style>
	
</style>



  
  