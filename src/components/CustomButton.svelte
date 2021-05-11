

<script>
	let buttonProps = {
	class:[$$restProps.class]
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
	.login{
		height: auto;
		width: 20%;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(204, 240, 238); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
	
		display: inline-block;
		cursor: pointer;
	}
	.suscripcion {
		height: auto;
		width: 50% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}
	.enter
	{
		height: auto;
		width: 90% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}
	.register
	{
		height: auto;
		width: 90% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
		
	}
	.r_register
	{
		height: auto;
		width: 50% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
		
	}
	.ayuda
	{
		height: auto;
		width: 70% ;
		background-color: rgb(14, 48, 54);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 400ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(180deg,rgb(28, 22, 98) 0%, rgb(28, 166, 221) 60%, rgb(42, 110, 122) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}

	.dropbtn
	{

		height: auto;
		width: 150% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 100%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}
	.dropdown
	{
		

		height: auto;
		width: 100% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 100%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}
	.pago
	{
		height: auto;
		width: 50% ;
		background-color: rgb(29, 81, 90);
		border-color: #305769;
		background-position: 100%;
		background-size: 400%;
		transition: background 900ms ease-in-out;
		text-align: center;
		color: rgb(255, 255, 255); 
		font-size: 150%; 
		padding: 1%; 
		border-radius: 50px; 
		background-image: linear-gradient(45deg,rgb(9, 31, 65) 0%, rgb(80, 146, 158) 56%, rgb(56, 213, 224) 100%); 
		vertical-align:top ;
		
		display: inline-block;
		cursor: pointer;
	}

	button:hover {
		
		background-position: 0;
		background-image: linear-gradient(83deg,rgb(28, 22, 98) 0%, rgb(28, 166, 221) 25%, rgb(86, 152, 163) 100%); 
		color: rgb(255, 255, 255); 
	}
</style>