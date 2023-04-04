let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let welcome = document.querySelector(".welcome");


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 2 + "px";
    mountains3.style.top = value * 1.5 + "px";
    mountains4.style.top = value * 1.2 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 1.5 + "px";
    welcome.style.fontSize = value + "px";
if(scrollY >= 67){
    welcome.style.fontSize = 67 + "px";
    welcome.style.position = "fixed";
if (scrollY >= 478){
    welcome.style.display = "none";

}else{
    welcome.style.display = "block";

}
if (scrollY >= 127){

    document.querySelector(".main").style.background ="linear-gradient(#376281,#10001f)"
}else{
    document.querySelector(".main").style.background ="linear-gradient(#200016,#10001f)"

}
}
}