"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
//function CalcularMedia(): void {
//    let primeiraNota: number;
//    let segundaNota: number;
//    let terceiraNota: number;
//    let media: number;
//    primeiraNota = Number(readlineSync.question('Digite a primeira nota: '));
//    segundaNota = Number(readlineSync.question('Digite a segunda nota: '));
//    terceiraNota = Number(readlineSync.question('Digite a terceira nota: '));
//    media = (primeiraNota + segundaNota + terceiraNota) / 3;
//    console.log(`\nA média das notas é: ${media}\n`);
//}
//CalcularMedia();
function contarVogais() {
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
contarVogais();
//# sourceMappingURL=index.js.map