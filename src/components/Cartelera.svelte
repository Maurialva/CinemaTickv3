<script>
    import Customfigure from '../components/Customfigure.svelte';
</script>

<grid> 

<div class="grid-container2">
	<div class="title">
		<h1>Cartelera</h1>
	</div>
    <div class="movie1">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie2">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie3">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie4">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie5">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie6">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie7">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie8">
        <Customfigure figname="TITULO"/>
    </div>
    <div class="movie9">
        <Customfigure figname="TITULO"/>
    </div>
</div>
</grid>
<style>
 .title{ grid-area: m0; }
  .movie1 { grid-area: m1; }
  .movie2 { grid-area: m2; }
  .movie3 { grid-area: m3; }
  .movie4 { grid-area: m4; }
  .movie5 { grid-area: m5; }
  .movie6 { grid-area: m6; }
  .movie7 { grid-area: m7; }
  .movie8 { grid-area: m8; }
  .movie9 { grid-area: m9; }
  
  .grid-container2 {
    display: grid;
    grid-template-areas:
      'm0 m0 m0'  
      'm1 m2 m3'
      'm4 m5 m6'
      'm7 m8 m9';
  }
  
  .grid-container2 > div {
      background-color:none;
    text-align: center;
    padding: none;
    border-radius: 50px; 
    border:none;
    
  }

</style>