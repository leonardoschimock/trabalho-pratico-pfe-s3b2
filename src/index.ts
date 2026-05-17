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

function Tabuada(): void {
    let numero: number;
    let resultado: number;
    numero = Number(readlineSync.question('Digite um numero para exibir a tabuada: '));
    for (let i = 1; i <= 10; i++) {
        resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
Tabuada();

function ValidarSenha(): void {
    let password: string;
    do {
        password = readlineSync.question('Digite uma senha: ');
        let temOitoChar: boolean = password.length >= 8;
        let temMaiuscula: boolean = /[A-Z]/.test(password);
        let temMinuscula: boolean = /[a-z]/.test(password);
        let temNumero: boolean = /[0-9]/.test(password);
        if (
            temOitoChar &&
            temMaiuscula &&
            temMinuscula &&
            temNumero
        ) {
            console.log('\nSenha válida!\n');
            break;
        } else {
            console.log('\nSenha inválida!\n');
            if (!temOitoChar) {
                console.log('- A senha deve ter pelo menos 8 caracteres');
            }
            if (!temMaiuscula) {
                console.log('- A senha deve ter pelo menos uma letra maiúscula');
            }
            if (!temMinuscula) {
                console.log('- A senha deve ter pelo menos uma letra minúscula');
            }
            if (!temNumero) {
                console.log('- A senha deve ter pelo menos um número');
            }
            console.log();
        }
    } while (true);
}
ValidarSenha();