"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function ParImpar() {
    let numero;
    numero = Number(readline_sync_1.default.question('Digite um numero: '));
    if (numero % 2 === 0) {
        console.log('\nNúmero par\n');
    }
    else {
        console.log('\nNúmero ímpar\n');
    }
}
function CalcularMedia() {
    let primeiraNota;
    let segundaNota;
    let terceiraNota;
    let media;
    primeiraNota = Number(readline_sync_1.default.question('Digite a primeira nota: '));
    segundaNota = Number(readline_sync_1.default.question('Digite a segunda nota: '));
    terceiraNota = Number(readline_sync_1.default.question('Digite a terceira nota: '));
    media = (primeiraNota + segundaNota + terceiraNota) / 3;
    console.log(`\nA média das notas é: ${media}\n`);
}
function MaiorNumero() {
    const numeros = [10, 45, 7, 99, 23];
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    console.log(`\nO maior número é: ${maior}\n`);
}
function ContarVogais() {
    let texto;
    let quantidade = 0;
    texto = readline_sync_1.default.question('Digite uma frase: ');
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (letra === 'a' ||
            letra === 'e' ||
            letra === 'i' ||
            letra === 'o' ||
            letra === 'u') {
            quantidade++;
        }
    }
    console.log(`\nQuantidade de vogais: ${quantidade}\n`);
}
function CalcularIMC() {
    const peso = Number(readline_sync_1.default.question('Digite seu peso (kg): \n'));
    const altura = Number(readline_sync_1.default.question('Digite sua altura (m): \n'));
    const imc = peso / (altura * altura);
    console.log(`Seu IMC é: ${imc.toFixed(2)}\n`);
    if (imc < 18.5) {
        console.log('Abaixo do peso\n');
    }
    else if (imc < 25) {
        console.log('Peso normal\n');
    }
    else if (imc < 30) {
        console.log('Sobrepeso\n');
    }
    else {
        console.log('Obesidade\n');
    }
}
function ContadorCaracteres() {
    const texto = readline_sync_1.default.question('Digite um texto: \n');
    const quantidade = texto.length;
    console.log(`O texto possui ${quantidade} caracteres.\n`);
}
function Menu() {
    console.log('MENU DE EXECICIOS \n');
    console.log(' 2 - VERIFICAR PAR OU IMPAR');
    console.log(' 3 - CALCULAR MEDIA DE 3 NOTAS');
    console.log(' 7 - MAIOR NUMERO DO ARRAY');
    console.log(' 8 - CONTADOR DE VOGAIS');
    console.log(' 15 - CALCULADORA DE IMC');
    console.log(' 18 - CONTADOR DE CARACTERES');
    console.log(' 0 - SAIR');
}
// async e Promise void estão sendo usandos junto ao await para esperar uma resposta do usuario
async function Sistema() {
    let opcao;
    //usamos o Do While para que o o menu seja seja executado 1 vez antes da verificaçao
    do {
        Menu();
        opcao = readline_sync_1.default.question('Escolha uma opcao: ');
        switch (opcao) {
            case '2':
                await ParImpar();
                break;
            case '3':
                await CalcularMedia();
                break;
            case '7':
                await MaiorNumero();
                break;
            case '8':
                await ContarVogais();
                break;
            case '15':
                await CalcularIMC();
                break;
            case '18':
                await ContadorCaracteres();
                break;
            case '0':
                console.log('Encerrando o programa...');
                break;
            default:
                console.log('Opção inválido!');
        }
    } while (opcao !== '0');
}
Sistema();
//# sourceMappingURL=index.js.map