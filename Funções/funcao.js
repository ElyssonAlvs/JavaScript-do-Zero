console.log('Ex1\n');

function mostrarFrase() {
    return 'Vamo que vamo!';
}

console.log(mostrarFrase());

console.log('----------------');

console.log('Ex2\n');

function saudacao(nome) {
    return `Olá, ${nome}`;
}

console.log(saudacao('João'));

console.log('----------------');

console.log('Ex3\n');

function clientePedido(numeroPedido) {
    if (numeroPedido === 1) {
        return 'Pizza de Calabresa';
    } else if (numeroPedido === 2) {
        return 'Pizza de Quatro Queijos';
    } else if (numeroPedido === 3) {
        return 'Pizza de Frango com Catupiry';
    } else if (numeroPedido === 4) {
        return 'Pizza de Brigadeiro';
    } else {
        return 'Número do pedido inválido!';
    }
}

console.log(clientePedido(1));

console.log('----------------');

console.log('Ex4\n');

const arrayNumeros = [9, 10, 7]

function mediaDosNumeros(arrayNumeros) {
    let soma = 0;
    let media = 0;

    for (let index = 0; index < arrayNumeros.length; index = index + 1) {
        soma = soma + arrayNumeros[index];
    }

    media = soma / arrayNumeros.length;

    return media;
}

console.log(mediaDosNumeros(arrayNumeros));