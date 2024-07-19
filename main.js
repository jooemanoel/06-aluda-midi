const listaBtn = document.querySelectorAll('button');

for (let i = 0; i < listaBtn.length; i++) {
    listaBtn[i].onclick = function(){
        let idAudio = `#som_${listaBtn[i].classList[1]}`;
        document.querySelector(idAudio).currentTime = 0;
        document.querySelector(idAudio).play();
    };
}

window.onkeydown = function(event){
    console.log(`Pressionou a tecla ${event.key}`);
};

window.onkeyup = function(event){
    console.log(`Soltou a tecla ${event.key}`);
};