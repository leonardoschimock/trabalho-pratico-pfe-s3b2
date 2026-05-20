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

function CalculadoraSimples(): void {
    const a: number = Number(readlineSync.question('Digite o primeiro número: '));
    const b: number = Number(readlineSync.question('Digite o segundo número: '));
    const operacao: string = readlineSync.question('Digite a operação (+, -, *, /): ');
    let resultado: number;

    switch (operacao) {
        case '+':
            resultado = a + b;
            console.log(`\nResultado: ${a} + ${b} = ${resultado}\n`);
            break;
        case '-':
            resultado = a - b;
            console.log(`\nResultado: ${a} - ${b} = ${resultado}\n`);
            break;
        case '*':
            resultado = a * b;
            console.log(`\nResultado: ${a} * ${b} = ${resultado}\n`);
            break;
        case '/':
            if (b === 0) {
                console.log('\nErro: divisão por zero não é permitida.\n');
            } else {
                resultado = a / b;
                console.log(`\nResultado: ${a} / ${b} = ${resultado}\n`);
            }
            break;
        default:
            console.log('\nOperação inválida!\n');
    }
}

interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    velocidadeAtual: number;
    acelerar(incremento: number): void;
    frear(decremento: number): void;
    exibirInformacoes(): void;
}

class Carro implements Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    velocidadeAtual: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidadeAtual = 0;
    }

    acelerar(incremento: number): void {
        this.velocidadeAtual += incremento;
        console.log(`Acelerando... Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    frear(decremento: number): void {
        this.velocidadeAtual -= decremento;
        if (this.velocidadeAtual < 0) {
            this.velocidadeAtual = 0;
        }
        console.log(`Freando... Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    exibirInformacoes(): void {
        console.log(`\nVeículo: ${this.marca} ${this.modelo} (${this.ano})`);
        console.log(`Velocidade atual: ${this.velocidadeAtual} km/h\n`);
    }
}

function VeiculoECarro(): void {
    const marca: string = readlineSync.question('Digite a marca do carro: ');
    const modelo: string = readlineSync.question('Digite o modelo do carro: ');
    const ano: number = Number(readlineSync.question('Digite o ano do carro: '));

    const carro: Carro = new Carro(marca, modelo, ano);
    carro.exibirInformacoes();

    const incremento: number = Number(readlineSync.question('Digite o valor para acelerar (km/h): '));
    carro.acelerar(incremento);

    const decremento: number = Number(readlineSync.question('Digite o valor para frear (km/h): '));
    carro.frear(decremento);

    carro.exibirInformacoes();
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


function ContadorCaracteres(): void {
    const texto = readlineSync.question('Digite um texto: \n');
    const quantidade = texto.length;
    console.log(`O texto possui ${quantidade} caracteres.\n`);
}


function Menu(): void {
    console.log ('\n===== MENU DE EXECICIOS =====');
    console.log (' 2 - VERIFICAR PAR OU IMPAR');
    console.log (' 3 - CALCULAR MEDIA DE 3 NOTAS')
    console.log (' 7 - MAIOR NUMERO DO ARRAY');
    console.log (' 8 - CONTADOR DE VOGAIS');
    console.log (' 9 - CALCULADORA SIMPLES');
    console.log (' 13 - VEICULO E CARRO');
    console.log (' 15 - CALCULADORA DE IMC');
    console.log (' 16 - VALIDADOS DE SENHA');
    console.log (' 18 - CONTADOR DE CARACTERES')
    console.log (' 0 - SAIR')
}

// async e Promise void estão sendo usandos junto ao await para esperar uma resposta do usuario
async function Sistema(): Promise <void> {
    let opcao: string;
    //usamos o Do While para que o o menu seja executado 1 vez antes da verificaçao
    do{
        Menu();
        opcao = readlineSync.question('Escolha uma opcao: ');
        switch (opcao){
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
            case '9':
                await CalculadoraSimples();
                break;
            case '13':
                await VeiculoECarro();
                break;
            case '15':
                await CalcularIMC();
                break;
            case '16':
                await ValidarSenha();
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