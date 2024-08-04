const divChute = document.querySelector('#chute');

let chute;

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibirChuteNaTela(chute);
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
