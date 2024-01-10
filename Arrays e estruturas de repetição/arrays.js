console.log('Ex1');
console.log('---------');
let listaCompras = ['Maça', 'Banana', 'Leite'];

console.log('---------');
console.log('Ex2');
console.log('----------');

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];

console.log('Terceiro item do array:', frutas[2]);

console.log('Primeiro item do array:', frutas[0]);

console.log('Quinto item do array:', frutas[4]);

console.log('Concatenação do primeiro item com o terceiro item:', frutas[0] + ' e ' + frutas[2]);

console.log('---------');
console.log('Ex3');
console.log('----------');

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];

convidados[2] = 'Laura';

convidados.push('Guilherme', 'Leticia');

console.log('Lista de convidados atualizada:', convidados);

console.log('---------');
console.log('Ex4');
console.log('----------');

const sabores = ['Chocolate', 'Morango', 'Açaí', 'Creme', 'Flocos'];

const coberturas = ['Chocolate', 'Morango', 'Doce de leite'];

console.log('Quantidade de sabores de sorvete:', sabores.length);

console.log('Quantidade de sabores de cobertura:', coberturas.length);

console.log('---------');
console.log('Ex5');
console.log('----------');

let lista = ['Quebra-Cabeça', 'Tetris', 'Sudoku', 'Xadrez', 'Batalha Naval'];
let inverter = true;
let listaInvertida = [];

if (inverter) {
  listaInvertida = lista.reverse();
  console.log('Lista Invertida:', listaInvertida);
} else {
  console.log('Lista Original:', lista);
}

