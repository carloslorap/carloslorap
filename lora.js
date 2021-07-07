let moon=document.getElementById("moon");

window.addEventListener('scroll',function(){
let value =window.scrollY;
moon.style.top = value * 0.70 + 'px';


})

window.addEventListener('load' , function () { 
    console.log('el contenido ha cargado');
    
    var imagenes =[]
    
    imagenes[0]='diseño carlos/png1.png'
    imagenes[1]='diseño carlos/png2.png'
    
    
    var indiceImagenes=0;
    
    function cambiarImagenes(){
    
        document.pin1.src=imagenes[indiceImagenes];
    
    if (indiceImagenes < 1) {
        indiceImagenes++; 
        
    }else{
    indiceImagenes = 0;
    }
    
    }
    
    setInterval(cambiarImagenes,2000);
    
    });




    















