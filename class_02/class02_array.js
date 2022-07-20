function definirArray() {
    console.log("Para criar um array basta let nome = []");
    console.log("Para criar um array com itens basta let nome [5,13,2,4]");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ["Emerson","Seiler"]
    console.log(nomes);
}
definirArray()

function alertar(mensagem) {
    alert(mensagem)
}

var lista = [];
lista = ["Emerson","Mayara", "Evina"];
function inserirArray(novo_nome) {
    lista.push(novo_nome);
    console.log(lista);
}

function listarFOR() {
    for(let contador=0;contador<lista.length;contador++) {
        console.log(`Repetindo com o for o indice ${contador} = ${lista[contador]}`)
    }
    console.log("---------------------------");

    for (const item of lista) {
        console.log(`Repetindo com o for inteligente, sem contar o indice - ${item}`);
    }
    console.log("---------------------------");

    lista.forEach(item => {
        console.log(`Repetindo com o foreach o item - ${item}`);
    });
}