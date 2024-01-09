let roupa1 = 35;
let roupa2 = 20;
let compras = roupa1 + roupa2;
let orcamento = compras <= 60;
console.log(orcamento);

console.log('---------------------');

let idadeDaThays = 53;
let idadeDoDouglas = 49;

let comparacao1 = idadeDaThays >= idadeDoDouglas;
let comparacao2 = idadeDoDouglas <= idadeDaThays;

console.log(comparacao1 + ' e ' + comparacao2);

console.log('---------------------');

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;

let comparacao01 = nomePessoa1 != 'Sheila';
let comparacao02 = idadePessoa1 == 18;
let comparacao03 = nomePessoa2 == 'Cleiton'
let comparacao04 = idadePessoa2 != 30;

console.log(comparacao01 + ' ' + comparacao02 + ' ' + comparacao03 + ' ' + comparacao04);

console.log('----------------------');

let sapato = 15;
let chinelo = 22;
let pantufa = 33;

let verificacao1 = sapato >= 15;
let verificacao2 = chinelo >= 12;
let verificacao3 = pantufa <= 18;

console.log(verificacao1 + ' ' + verificacao2 + ' ' + verificacao3);

console.log('-------------------------');

let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = '159000';
let senhaDigitada4 = 159000;

let verificacao01 = (senhaDigitada1 === senhaDoWiFi);
let verificacao02 = (senhaDigitada2 === senhaDoWiFi);
let verificacao03 = (senhaDigitada3 === senhaDoWiFi);
let verificacao04 = (senhaDigitada4 === senhaDoWiFi);

console.log(`A senha digitada 1 é válida? ${verificacao01}`);
console.log(`A senha digitada 2 é válida? ${verificacao02}`);
console.log(`A senha digitada 3 é válida? ${verificacao03}`);
console.log(`A senha digitada 4 é válida? ${verificacao04}`);

