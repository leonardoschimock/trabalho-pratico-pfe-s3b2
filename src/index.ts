import readlineSync from 'readline-sync';

function CalcularMedia(): void {
    let primeiraNota: number;
    let segundaNota: number;
    let terceiraNota: number;
    let media: number;
    primeiraNota = Number(readlineSync.question('Digite a primeira nota: '));
    segundaNota = Number(readlineSync.question('Digite a segunda nota: '));
    terceiraNota = Number(readlineSync.question('Digite a terceira nota: '));
    media = (primeiraNota + segundaNota + terceiraNota) / 3;
    console.log(`\nA média das notas é: ${media}\n`);
}
CalcularMedia();


function ContarVogais(): void {
    let texto: string;
    let quantidade: number = 0;
    texto = readlineSync.question('Digite uma frase: ');
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (
            letra === 'a' ||
            letra === 'e' ||
            letra === 'i' ||
            letra === 'o' ||
            letra === 'u'
        ) {
            quantidade++;
        }
    }
    console.log(`\nQuantidade de vogais: ${quantidade}\n`);
}
ContarVogais();