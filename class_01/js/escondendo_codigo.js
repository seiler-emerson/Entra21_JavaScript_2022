// console.log("Hello World"); //O console aceita parâmetros para exibir em log
// console.log("Emerson "+27+" anos"); //É possível concatenar textos e variáveis igual ao java
// console.log("Emerson",27,"anos"); //O console aceita infinitos parâmetros basta separar por virgula

// let nome="Emerson"; // Let cria uma variável com escopo limitado
// var sobrenome="Francesconi"; //Var cria uma variável quie continua existindo mesmo depois do escopo

// console.log(nome);
// console.log("Meu nome é "+nome);
// console.log("Meu nome é", nome);
// console.log("Meu nome é "+nome+" mas me chamam também de 'Nerd'");
// console.log('Meu nome é '+nome+' mas me chamam também de "Nerd"');
// console.log('Meu nome é '+nome+' mas me chamam também de \'Nerd\'');
// console.log(`Meu
// nome é ${nome}`);
// console.log("No momento nome é do tipo "+ typeof(nome));
// nome=10;
// console.log("No momento nome é do tipo "+ typeof(nome));
// nome=false;
// console.log("No momento nome é do tipo "+ typeof(nome));
// nome="";
// console.log("No momento nome é do tipo "+ typeof(nome));
// let idade = 24;
// let altura = 1.72;
// console.log(`A variável idade é do tipo ${typeof(idade)} e a variável altura é do tipo ${typeof(altura)}`);

// let mensagem = prompt("O que vc está pensando?");
// console.log("Você está pensando "+ mensagem);
// let interromper = prompt("Estou interrompendo?")
// console.log("A informação capturada é do tipo "+ typeof(mensagem));

// console.log("Os operadores aritmeticos são os mesmos do java +,-,/,*,%");

// console.log("Somando "+(1+2));
// console.log("Subtraindo "+(3-1));
// console.log("Dividindo "+(9/3));
// console.log("Multiplicando "+(4*5));
// console.log("Resto "+(10%3));

// if(idade<18) {
//    console.log("É menor de idade");
// } else {
//     console.log("É maior de idade");
// }

// if (altura<1.5) {
//     console.log("Baixinho!");
// } else if(altura<1.7) {
//     console.log("Mais ou menos");
// } else {
//     console.log("Gigante");
// }

// let resposta = (altura<2?"Normal":"Gigante");
// console.log(resposta);

// switch(idade) {
//     case 1:
//         console.log("1 aninho");
//         break;
//     case 2:
//         console.log("2 aninhos");
//         break;
//     default:
//         console.log("Chega ta bom...");
//         break;

// }

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let cidade = prompt("Qual a cidade em que você mora?");

console.log(`Bem vindo ${nome}, vejo que você tem ${idade} anos de idade e mora em ${cidade}.`);
console.log("Esse site é apenas para desenvolvedores não importa a idade nem onde mora, mas o importante é ter vontade de aprender.");
console.log("");
console.log("Veja os operadores matemáticos em ação:");

console.log(`1+2=${1+2}
2-5=${2-5}
3*10=${3*10}
50/10=${50/10}`);

console.log();
console.log(`É um morador de Blumenau? ${cidade == "Blumenau"}`);

if (idade<18) {
    console.log("Idade é menor que 18");
} else {
    console.log("Idade é maior que 18");
}

if (idade<=18) {
    console.log("Idade é menor ou igual a 18");
} else {
    console.log("Idade é maior que 18");
}

if (idade > 18) {
    console.log("Idade é maior que 18");
} else {
    console.log("Idade é menor ou igual a 18");
}

if (idade => 18) {
    console.log("Idade é maior ou igual a 18");
} else {
    console.log("Idade é menor que 18");
}

if (idade>18 && cidade=="Blumenau") {
    console.log("É maior de idade E mora em Blumenau");
} else {
    console.log("Não é maior de idade ou não mora em Blumenau");
}

if (idade>18 || cidade=="Blumenau") {
    console.log("É maior de idade OU mora em Blumenau");
} else {
    console.log("Não é maior de idade e não mora em Blumenau");
}
