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
const gameBoard = document.querySelector('.game-board');

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
      modal.classList.remove('habilitar');
      gameBoard.classList.toggle('start');
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
    const marioPositionB = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioPositionL = +window.getComputedStyle(mario).left.replace('px', '');

    if(marioPositionB >= 150 && bonusPosition <= 120) {
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
  bonus.style.animation = 'none';
  mario.style.display = 'none';
  moeda.style.display = 'none';

  mudarTexto();
}

var count = 3;
const vidas = document.getElementById("vidas");

// Fecha o pop-up e retoma o jogo
closePopupv.addEventListener('click', () => {
  popup.style.display = 'none';
  bonus.style.display = 'block';
  moeda.style.display = 'block';
  mario.style.display = 'block';
  pipe.style.animation = 'pipe-animation 3.5s infinite linear';
  moeda.style.animation = 'moeda-animation 2.5s infinite linear';
  bonus.style.animation = 'bonus-animation 3.5s infinite linear';
  bonus.style.bottom = '180px';

  
  gameRunning = true;

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
  bonus.style.display = 'block';
  moeda.style.display = 'block';
  mario.style.display = 'block';
  gameBoard.classList.remove('start');
  pipe.style.animation = 'pipe-animation 3.5s infinite linear';
  bonus.style.animation = 'bonus-animation 3.5s infinite linear';
  moeda.style.animation = 'moeda-animation 2.5s infinite linear';
  bonus.style.bottom = '180px';

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
  "O HIV é o mesmo que AIDS.",
  "Uma pessoa com HIV pode viver muitos anos sem desenvolver AIDS.",
  "O HIV pode ser transmitido pelo beijo, abraço ou aperto de mão.",
  "O uso do preservativo é uma forma eficaz de prevenir a infecção pelo HIV.",
  "O HIV pode ser transmitido da mãe para o bebê durante a gestação, parto ou amamentação.",
  "A infecção pelo HIV sempre apresenta sintomas logo após o contágio.",
  "Atualmente, não existe cura para o HIV, mas o tratamento permite controlar o vírus.",
  "Mosquitos podem transmitir o HIV de uma pessoa para outra.",
  "A testagem regular é importante mesmo para quem não apresenta sintomas.",
  "O tratamento antirretroviral deve ser iniciado apenas quando surgirem os sintomas da AIDS."
];

var respostas = [
  false,  // O HIV é o mesmo que AIDS.
  true,   // Uma pessoa com HIV pode viver muitos anos sem desenvolver AIDS.
  false,  // O HIV pode ser transmitido pelo beijo, abraço ou aperto de mão.
  true,   // O uso do preservativo é uma forma eficaz de prevenir a infecção pelo HIV.
  true,   // O HIV pode ser transmitido da mãe para o bebê durante a gestação, parto ou amamentação.
  false,  // A infecção pelo HIV sempre apresenta sintomas logo após o contágio.
  true,   // Atualmente, não existe cura para o HIV, mas o tratamento permite controlar o vírus.
  false,  // Mosquitos podem transmitir o HIV de uma pessoa para outra.
  true,   // A testagem regular é importante mesmo para quem não apresenta sintomas.
  false   // O tratamento antirretroviral deve ser iniciado apenas quando surgirem os sintomas da AIDS.
];

function mudarTexto() {
    // Seleciona o elemento <p> pelo id
    let chave = Math.floor(Math.random() * 11); 
    let paragrafo = document.getElementById("meuParagrafo");
    
    // Define o texto que você quer colocar dentro do <p>
    paragrafo.innerText = perguntas[chave];
    
    if(respostas[chave] == true) {
        closePopupv.classList.add("pontua");
    } else {
        closePopupf.classList.add("pontua");
    }
}