console.log('Ex1');
console.log('-------');

let numero = 30;
let resultado = true;

if ((numero >= 20 && numero <= 50) && numero % 2 == 0) {
    console.log(resultado);
} else {
    console.log(!resultado);
}

console.log('-------');
console.log('Ex2');
console.log('-------');

let local = 'cinema';
let estadoEmocional = true;

if (local == 'praia' || local == 'cinema') {
    console.log(estadoEmocional);
} else {
    console.log(!estadoEmocional);
}

console.log('-------');
console.log('Ex3');
console.log('-------');

let temOxigenioNoEspaço = true;
let aTerraEPequena = true;
console.log('Antes: ');
console.log(temOxigenioNoEspaço);
console.log(aTerraEPequena);
console.log("Depois: ");
console.log(temOxigenioNoEspaço = !temOxigenioNoEspaço);
console.log(aTerraEPequena = !aTerraEPequena);

console.log('-------');
console.log('Ex4');
console.log('-------');

let login = 'joabCassimiro';
let senha = '12345678';

let verificaCredenciais = true;
if (login == 'joabCassimiro' && senha == '12345678') {
    console.log(verificaCredenciais);
} else {
    console.log(!verificaCredenciais);
}

console.log('-------');
console.log('Ex5');
console.log('-------');

let gostoPorPraia = false;
let novoGostoPorPraia = !gostoPorPraia;
console.log(novoGostoPorPraia);
