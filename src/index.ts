import readlineSync from 'readline-sync';

function calcularMedia(): void {

    let primeiraNota: number;
    let segundaNota: number;
    let terceiraNota: number;
    let media: number;

    primeiraNota = Number(readlineSync.question('Digite a primeira nota: '));
    segundaNota = Number(readlineSync.question('Digite a segunda nota: '));
    terceiraNota = Number(readlineSync.question('Digite a terceira nota: '));

    media = (primeiraNota + segundaNota + terceiraNota) / 3;

    console.log(`\nA média das notas é: ${media.toFixed(2)}\n`);

}

calcularMedia();