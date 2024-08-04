const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = () => {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número sercreto: ', numeroSecreto());

document.querySelector('#menor-valor').textContent = `${menorValor}`;
document.querySelector('#maior-valor').textContent = `${maiorValor}`;