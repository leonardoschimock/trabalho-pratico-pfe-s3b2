"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function calcularMedia() {
    let primeiraNota;
    let segundaNota;
    let terceiraNota;
    let media;
    primeiraNota = Number(readline_sync_1.default.question('Digite a primeira nota: '));
    segundaNota = Number(readline_sync_1.default.question('Digite a segunda nota: '));
    terceiraNota = Number(readline_sync_1.default.question('Digite a terceira nota: '));
    media = (primeiraNota + segundaNota + terceiraNota) / 3;
    console.log(`\nA média das notas é: ${media.toFixed(2)}\n`);
}
calcularMedia();
//# sourceMappingURL=index.js.map