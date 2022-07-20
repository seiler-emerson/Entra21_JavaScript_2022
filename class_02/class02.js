procedimento(); // Chamada
//Essa função está sendo chamada e não precisa de argumentos

bemVindo("Emerson");
bemVindo(true);
bemVindo(30)
bemVindo(bemVindo);
login("carlos",123);
maiorDeIdade(15);

let resultado = maiorDeIdade(16);
console.log(resultado);

let concatenado = maiorDeIdade(10)+maiorDeIdade(20);
console.log(concatenado);

function procedimento() {   //Declaração
    console.log("Esse tipo de função sempre executa da mesma forma, porque não tenho parâmetros, para deixar dinâmico.");

    console.warn("Essa função também não retorna nada");
}

console.log(media(3,9,10));
console.log(verificarSituacao(3))
console.log(verificarSituacao(media(3,9,10)))

//procedimento(); // Chamada

function bemVindo(nome) {
    console.log(typeof(nome));
    console.warn("Bem vindo ",nome);
    console.warn(`Bem vindo ${nome}`);
}

function login(userName, password) {
    console.error("O usuario "+userName+"cuja senha é: "+password+" está inadimplente e não pode entrar,")
}

function maiorDeIdade(idade) {
    if(idade<18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }
} 

function media(nota1,nota2,nota3) {
    return (nota1+nota2+nota3)/3
}

function verificarSituacao(media) {
    return media>=7?"Aprovado":"Reprovado";
}

function somar(a,b) {
    return a+b;
}

function subtrair(a,b) {
    return a-b;
}

function multiplicar(a,b) {
    return a*b;
}

function dividir(a,b) {
    return a/b;
}

console.log(`Somando = ${somar(2,2)}`);
console.log(`Subtraindo = ${subtrair(2,7)}`);
console.log(`Multiplicando = ${multiplicar(3,7)}`);
console.log(`Dividindo = ${dividir(9,2)}`);

function merendar() {
    console.warn("Hora de merendar!");
}

merendar();