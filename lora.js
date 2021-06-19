let moon=document.getElementById("moon");

window.addEventListener('scroll',function(){
let value =window.scrollY;
moon.style.top = value * 0.70 + 'px';


})