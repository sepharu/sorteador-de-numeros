function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if(quantidade <= ate - de) {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
    
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
                alert('gerando número');
            }
    
            sorteados.push(numero);
        }
    } else {
        alert('Numero Invalido: A quantidade de números sorteados é maior que o intervalo.');
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class='texto_paragrafo'>Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

    console.log(`Quantidade: ${quantidade}`);
    console.log(`De: ${de}`);
    console.log(`Até: ${ate}`);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}