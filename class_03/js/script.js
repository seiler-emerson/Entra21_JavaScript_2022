console.warn("READ");
let leitura = document.getElementById("paragrafo_ler");
console.log(leitura);
console.log("Apenas o conteúdo ou textContent:",leitura.textContent);
console.log("Apenas o conteúdo + elementos internos com HTML:", leitura.innerHTML);

let lerSpan = document.getElementById("ler_span");
console.log("Apenas o conteúdo ou textContent:",lerSpan.textContent);
console.log("Apenas o conteúdo + elementos internos com HTML:",lerSpan.innerHTML);

let lerBotao = document.getElementById("ler_botao");
console.log("Apenas o conteúdo ou textContent:",lerBotao.textContent);
console.log("Apenas o conteúdo + elementos internos com HTML:",lerBotao.innerHTML);

let aprendendo_leitura = document.getElementById('test_01');
console.log("Apenas o conteúdo ou textContent:",aprendendo_leitura.textContent);
console.log("Apenas o conteúdo + elementos internos com HTML:",aprendendo_leitura.innerHTML);



console.warn("READ MORE");

let paragrafos = [...document.getElementsByTagName("p")];
console.log("Lendo todos os paragrafos:",paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.innerHTML);
});

console.warn("WRITE");

let escrita = document.getElementById('paragrafo_escrever');
escrita.textContent = "Esse paragrafo foi escrito com JavaScript"
escrita.title = "www.google.com";

document.getElementById('ler_botao').textContent = "Botão alterado com JavaScript";

let span01 = document.getElementById('alterar_01');
span01.textContent = "Texto do span 01 alterado";

let span02 = document.getElementById('alterar_02');
span02.textContent = "Texto do span 02 alterado";

function mudar_conteudo(conteudo) {
    let elemento = document.getElementById('qualquer');

    elemento.title = conteudo;
    elemento.textContent = conteudo
}

function addConteudo(conteudo) {
    let enter = document.createElement("br");
    document.body.append(enter)

    let elemento = document.createElement("div");
    elemento.textContent = conteudo;

    document.body.append(elemento);
}