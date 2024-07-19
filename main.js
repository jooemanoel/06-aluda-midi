let listaBtn = document.querySelectorAll('button');
let listaAudios = document.querySelectorAll('audio');

let modelo = {};
for (let i = 0; i < listaBtn.length; i++) {
    modelo[listaBtn[i].innerHTML] = listaAudios[i];
}


window.onclick = function(event){
    if(event.target.localName == 'button')
        modelo[event.target.innerHTML].play();
}
