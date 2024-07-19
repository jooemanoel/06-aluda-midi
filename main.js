const listaBtn = document.querySelectorAll('button');

for (let i = 0; i < listaBtn.length; i++) {
    listaBtn[i].onclick = function(){
        let idAudio = `#som_${listaBtn[i].classList[1]}`;
        document.querySelector(idAudio).currentTime = 0;
        document.querySelector(idAudio).play();
    };
}

window.onkeydown = function(event){
    for (let i = 0; i < listaBtn.length; i++) {
        if(listaBtn[i].classList[2] == event.key){
            listaBtn[i].onclick();
            listaBtn[i].classList.add('ativa');
            teclaPressionada = event.key;
        }
    }
}

window.onkeyup = function(event){
    for (let i = 0; i < listaBtn.length; i++) {
        if(listaBtn[i].classList[2] == event.key){
            listaBtn[i].classList.remove('ativa');
        }
    }
}