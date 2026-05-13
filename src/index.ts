import readlineSync from 'readline-sync';

function ParImpar(): void{
    
    let numero: number;

    numero = Number (readlineSync.question('Digite um numero: '));


    if (numero % 2 === 0) {
        console.log('\nNúmero par\n');
    } else {
        console.log('\nNúmero ímpar\n');
    }

}

function MaiorNumero(): void{

    const numeros: number[] = [10, 45, 7, 99, 23];
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++){

        if (numeros[i] > maior){

            maior = numeros[i];
        }
    }

    console.log(`\nO maior número é: ${maior}\n`);
}

function CalcularIMC(): void {

    const peso = Number(readlineSync.question('Digite seu peso (kg): \n'));
    const altura = Number(readlineSync.question('Digite sua altura (m): \n'));

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}\n`);

    if (imc < 18.5) {
        console.log('Abaixo do peso\n');
    } else if (imc < 25) {
        console.log('Peso normal\n');
    } else if (imc < 30) {
        console.log('Sobrepeso\n');
    } else {
        console.log('Obesidade\n');
    }
}

function ContadorCaracteres(): void {

    const texto = readlineSync.question('Digite um texto: \n');

    const quantidade = texto.length;

    console.log(`O texto possui ${quantidade} caracteres.\n`);
}

function menu(): void {

    console.log ('MENU DE EXECICIOS \n');
    console.log (' 2 - VERIFICAR PAR OU IMPAR');
    console.log (' 7 - MAIOR NUMERO DO ARRAY');
    console.log (' 15 - CALCULADORA DE IMC');
    console.log (' 18 - CONTADOR DE CARACTERES')
    console.log (' 0 - SAIR')
}

// async e Promise void estão sendo usandos junto ao await para esperar uma resposta do usuario
async function sistema(): Promise <void> {

let opcao: string;

//usamos o Do While para que o o menu seja seja executado 1 vez antes da verificaçao
do{

    menu();
    opcao = readlineSync.question('Escolha uma opcao: ');

    switch (opcao){

        case '2':
            await ParImpar();
                break;
        
        case '7':
            await MaiorNumero();
                break;

        case '15':
            await CalcularIMC();
                break;

        case '18':
            await ContadorCaracteres();
                break;

        case '0':
            console.log('Encerrando o programa...')
                break;

        default:
            console.log('Opção inválido!')
    }

} while (opcao !== '0');

}
sistema();
