const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = geradorDeNumeroSecreto();

console.log('Número sercreto: ', numeroSecreto);

document.querySelector('#menor-valor').textContent = `${menorValor}`;
document.querySelector('#maior-valor').textContent = `${maiorValor}`;

function geradorDeNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}
