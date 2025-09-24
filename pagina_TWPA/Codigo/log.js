let lista=document.querySelector('.deslizador .lista');
let items=document.querySelectorAll('.deslizador .lista .item');
let puntos=document.querySelectorAll('.deslizador .puntos li');
let sig=document.getElementById('sig');
let ant= document.getElementById('ant');

let active=0;
let t_items=items.length - 1;



sig.onclick=function(){
    if(active+1>t_items){
        active=0
    }else{
        active=active+1
    }
    redeslizador();
}

ant.onclick=function(){
    if(active-1<0){
        active=t_items;
    }else{
        active=active-1;
    }
    redeslizador();
}


let refreshSlider=setInterval(()=>{sig.click()},3000)

function redeslizador(){
    let checkizq= items[active].offsetLeft;
    lista.style.left=-checkizq +'px';
    let lastActiveDot= document.querySelector('.deslizador .puntos li.active');
    lastActiveDot.classList.remove('active');
    puntos[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider=setInterval(() => {sig.click()},3000);
}

puntos.forEach((li,key)=>{

    li.addEventListener('click',function(){
        active=key;
        redeslizador();
    })
})

