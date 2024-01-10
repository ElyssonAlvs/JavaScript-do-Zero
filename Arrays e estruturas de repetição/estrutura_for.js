const listaDeCompras = [
    'maçã',
    'gengibre',
    'miojo',
    'biscoito/bolacha',
    'banana',
    'feijão carioquinha',
    'pasta de dente',
];
const carrinho = [];

for (let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; posicaoNaLista += 1) {
    if (listaDeCompras[posicaoNaLista] === 'maçã' || listaDeCompras[posicaoNaLista] === 'banana') {
        carrinho.push(listaDeCompras[posicaoNaLista]);
    }
}

console.log(carrinho); // ['maçã', 'banana']

console.log('|--------------------------------|');

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
    for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
        if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]) {
            amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
        }
    }
}

console.log(amizadesEmComum);

console.log('|---------------------------------|');

console.log('Ex1\n');

const numeros = [1, 2, 3, 4, 5];

for (let i = numeros[0]; i <= numeros.length; i += 1) {
    console.log(i);
}

console.log('|---------------------------------|');

console.log('Ex2\n');

const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
let somaTotal = 0; // valor total

for (let i = 0; i < valoresProdutos.length; i += 1) {
    somaTotal += valoresProdutos[i];
}

console.log(somaTotal);

console.log('|---------------------------------|');

console.log('Ex3\n');

const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];

listaDeFrutas.push('manga')

for (let i = 0; i < listaDeFrutas.length; i += 1) {
    console.log(listaDeFrutas[i]);
}

console.log('|---------------------------------|');

console.log('Ex4\n');

const multiplicador = [3, 7];

for (let x = 0; x < multiplicador.length; x += 1) {
    for (let y = 0; y <= 9; y += 1) {
        console.log(`${multiplicador[x]} x ${y} = ${multiplicador[x] * y}`);
    }
}


