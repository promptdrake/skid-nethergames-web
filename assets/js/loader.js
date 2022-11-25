/*!

◇─◇──◇───────────────────────◇──◇─◇
|   © Copyright By aisbircube.xyz   |
|    Best Minecraft Account Shop     |
◇─◇──◇───────────────────────◇──◇─◇

*/
$(function(){
	$("#randommessage").html($("#randommessage").html().replace("", splashes[Math.floor(Math.random()*splashes.length)]));
});

window.onload = function(){
    setTimeout(function(){
    var loader = document.getElementsByClassName("loader")[0];
    loader.className="loader fadeout" ;
    setTimeout(function(){loader.style.display="none"},1000);
    },1000)
  }