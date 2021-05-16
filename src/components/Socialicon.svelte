<script>

    export let nombre;
    let dir;
    let scr,scr2;
    switch(nombre)
    {
        case "Instagram": 
        {
            dir= "https://www.instagram.com/explore/tags/jamon/";
            scr='/logo_instagram.png' ;
            scr2='logo_instagramh.png' ;
        } break;
        case "Facebook":
        {
            dir= "https://www.facebook.com/groups/jamonserrano";
            scr="logo_facebook.png" ;scr2="logo_instagramh.png" ;
        } break;
        case "Twitter": 
        {
            dir= "https://twitter.com/search?q=%23jamon&src=typed_query";
            scr="logo_twitter.png" ;scr2="logo_instagramh.png" ;
        } break;

    }
    
</script>
<a class="w-full" href={dir}> <img  id= "socialicon"  src={scr} alt={nombre}></a>

<style>
  

</style>

