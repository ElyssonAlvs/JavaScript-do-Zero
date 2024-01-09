console.log('Ex1');
console.log('-------');

let atribuirMensagem = true;
let mensagem;

if (atribuirMensagem == true) {
  mensagem = 'Olá, Tryber!'
  console.log(mensagem);
}

console.log('-------');
console.log('Ex2');
console.log('-------');

let lampada = 'desligada';
let estadoLampada;

if (lampada == 'ligada') {
  console.log(estadoLampada = 'A lâmpada está ligada!');
} else if (lampada != 'ligada') {
  console.log(estadoLampada = 'A lampada está desligada');
}

console.log('-------');
console.log('Ex3');
console.log('-------');

let num = 7;
let mensagem1;

if (num % 2 == 0) {
  console.log(mensagem1 = `${num} é par`);
} else {
  console.log(mensagem1 = `${num} é ímpar`);
}

console.log('-------');
console.log('Ex4');
console.log('-------');

let nota1 = 7;
let nota2 = 7;
let media = (nota1 + nota2) / 2;

if (media >= 7) {
  console.log(`Média = ${media}, Aprovado!`);
} else {
  console.log(`Média = ${media}, Reprovado`);
}

console.log('-------');
console.log('Ex5');
console.log('-------');

let usuario = 'tryber';
let senha = 'tr1b3';

if (usuario == 'tryber' && senha == 'tr1b3') {
  console.log('Autenticação válida!');
} else {
  console.log('Login e/ou senha incorretos');
}

console.log('-------');
console.log('Ex6');
console.log('-------');

let idadeJulia = 21;
let idadeErick = 25;
let verificaIdadePessoas = '';

if (idadeJulia > idadeErick) {
  console.log(verificaIdadePessoas = 'Julia é mais velha que Erick');
} else if (idadeErick > idadeJulia) {
  console.log(verificaIdadePessoas = 'Erick é mais velha que Julia');
} else {
  console.log(verificaIdadePessoas = 'Possuem a mesma idade');
}

console.log('-------');
console.log('Ex7');
console.log('-------');

let dadoNumero = 16;
let classe = '';
let resultado = '';

if (dadoNumero < 4) {
  classe = 'Guerreiro(a)';
} else if (dadoNumero < 8) {
  classe = 'Ladino(a)';
} else if (dadoNumero < 12) {
  classe = 'Curandeiro(a)';
} else if (dadoNumero < 16) {
  classe = 'Arqueiro(a)';
} else {
  classe = 'Feiticeiro(a)';
}

resultado = 'Sua classe é: ' + classe;

console.log(resultado);
