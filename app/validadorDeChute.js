function validarChute(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        divChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        divChute.innerHTML += `<div>Valor inválido: o número secreto  precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id='jogar-novamente' class='btn-jogar'>jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        const div = document.createElement('div');
        div.innerHTML = `O número ${chute} é meior que número secreto <i class="fa-solid fa-down-long"></i>`;
        document.body.append(div);
    } else {
        const div = document.createElement('div');
        div.innerHTML = `O número ${chute} é meno que p número secreto <i class="fa-solid fa-up-long"></i>`;
        document.body.append(div);
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})