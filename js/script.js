const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const build = document.querySelector('.build');
const clouds = document.querySelector('.clouds');
const bonus = document.querySelector('#bonus');
const btnStart = document.querySelector('#btnStart');
const btnRanking = document.querySelector('#btnRanking');
const modal = document.querySelector('#modal');
const modalLogin = document.querySelector('#modalLogin');
const modalGameOver = document.querySelector('#modalGameOver');
const modalWin = document.querySelector('#modalWin');
const gameBoard = document.querySelector('.game-board');
const span = document.querySelector('.modal-win h1 span');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500)
}

const gameOver = () => {
  pipe.style.animation = 'none';
  bonus.style.animation = 'none';
  mario.style.display = 'none';
  moeda.style.display = 'none';
  modal.classList.toggle('habilitar');
  modalGameOver.classList.toggle('active');
  modalLogin.classList.remove('active');
  gameBoard.classList.remove('start');

}


btnStart.addEventListener('click', () => {
      modal.classList.remove('habilitar');
      gameBoard.classList.toggle('start');
});

btnRanking.addEventListener('click', () => {
    location.reload();
    });

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 || count == 0) {
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';
        mario.style.width = '75px';
        mario.style.marginLeft = '-50px';

        gameOver();

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump)



const moeda = document.getElementById('moeda');
const popup = document.getElementById('popup');
const closePopupv = document.getElementById('close-popup-v');
const closePopupf = document.getElementById('close-popup-f');
const pontos = document.getElementById('txtpontos');
var countPontos = 0;

const loopBonus = setInterval(() => {
    
    const bonusPosition = bonus.offsetLeft;
    const bonusPositionB = +window.getComputedStyle(bonus).bottom.replace('px', '');
    const marioPositionB = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionL = +window.getComputedStyle(mario).left.replace('px', '');

    if(marioPositionB >= 150 && bonusPosition <= 120 && bonusPositionB > 0) {
        bonus.style.bottom = '-300px';
        openPopup();
    }

}, 10);

const loopmoeda = setInterval(() => {
    
    const moedaPosition = moeda.offsetLeft;
    const marioPositionB = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionL = +window.getComputedStyle(mario).left.replace('px', '');

    if(marioPositionB >= 150 && moedaPosition <= 120) {

        countPontos++;   
        pontos.innerHTML = countPontos;
        moeda.style.display = "none";

        setTimeout(() => {
            moeda.style.display = "block";
        }, 50);

    }

}, 10);

// Abre o pop-up e pausa o jogo
function openPopup() {
  popup.style.display = 'flex';
  pipe.style.animation = 'none';
  mario.style.display = 'none';

  mudarTexto();
}

var count = 3;
const vidas = document.getElementById("vidas");
let tempoOculto = 5000;



// Fecha o pop-up e retoma o jogo
closePopupv.addEventListener('click', () => {
  popup.style.display = 'none';
  moeda.style.display = 'block';
  mario.style.display = 'block';
  pipe.style.animation = 'pipe-animation 3.5s infinite linear';
  moeda.style.animation = 'moeda-animation 2.5s infinite linear';
  bonus.style.animation = 'bonus-animation 3.5s infinite linear';
  
    setTimeout(() => {
        bonus.style.bottom = '180px';
    }, tempoOculto);


  if (closePopupv.classList.contains("pontua")) {
    closePopupv.classList.remove("pontua");
    countPontos += 20;
    pontos.innerHTML = countPontos;
  } else {
    closePopupf.classList.remove("pontua");
    count--;
    vidas.innerText = count;
}


});

closePopupf.addEventListener('click', () => {
  popup.style.display = 'none';
  moeda.style.display = 'block';
  mario.style.display = 'block';
  pipe.style.animation = 'pipe-animation 3.5s infinite linear';
  bonus.style.animation = 'bonus-animation 3.5s infinite linear';
  moeda.style.animation = 'moeda-animation 2.5s infinite linear';

    setTimeout(() => {
        bonus.style.bottom = '180px';
    }, tempoOculto);


    if (closePopupf.classList.contains("pontua")) {
    closePopupf.classList.remove("pontua");
    countPontos += 20;
    pontos.innerHTML = countPontos;
  } else {
    closePopupv.classList.remove("pontua");
    count--;    
    vidas.innerText = count;
}
  
  gameRunning = true;
});


var perguntas = [
  "Se eu fizer o teste de HIV e der negativo logo depois de uma relação de risco, posso ter certeza de que não estou infectado?",
  "Tomar a PrEP (profilaxia pré-exposição) elimina totalmente a necessidade de usar camisinha?",
  "O HIV pode ser transmitido durante o sexo oral, mesmo sem ejaculação",
  "Uma pessoa com HIV em tratamento e com carga viral indetectável não transmite o vírus durante relações sexuais.",
  "Usar dois preservativos ao mesmo tempo oferece proteção dupla contra o HIV?",
  "Mulheres que vivem com HIV podem ter filhos sem transmitir o vírus ao bebê?",
  "Compartilhar lâminas de barbear ou alicates de unha pode transmitir HIV?",
  "O HIV pode ser transmitido durante o beijo se houver feridas na boca ou sangramento gengival.",
];

var respostas = [
  false,
  false,   
  true,  
  true,   
  false,   
  true, 
  true,   
  false,  

];

let chave = 0;

function mudarTexto() {
    // Seleciona o elemento <p> pelo id
    let paragrafo = document.getElementById("meuParagrafo");
    
    // Define o texto que você quer colocar dentro do <p>
    paragrafo.innerText = perguntas[chave];
    
    if(respostas[chave] == true) {
        closePopupv.classList.add("pontua");
    } else {
        closePopupf.classList.add("pontua");
    }

    chave++;

    if(chave == 8) {
    modal.classList.toggle('habilitar');
    modalLogin.classList.remove('active');
    modalWin.classList.toggle('active');
    span.innerHTML = countPontos;
    }

}



