const divChute = document.querySelector('#chute');
const body = document.querySelector('body');

let chute;

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    if (chute === 'fim do jogo' || chute === 'Fim do jogo') {
        body.classList.add('red');
        body.innerHTML = `
            <h1>GAME OVER</H1>
            <button id='jogar-novamente' class='btn-jogar'>jogar Novamente</button>
        `;
    }
    exibirChuteNaTela(chute);
    validarChute(chute);
}

function exibirChuteNaTela(chuteTreino) {
    const div = document.createElement('div');
    div.textContent = 'Você disse:'
    const span = document.createElement('span');
    span.classList.add('box');
    span.textContent = chuteTreino;
    divChute.append(div);
    divChute.append(span);
}

recognition.addEventListener('end', () => recognition.start())
