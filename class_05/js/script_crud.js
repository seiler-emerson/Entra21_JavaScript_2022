$("header .card-body a").attr("class","btn btn-outline-success")

$("#update").hide()

let pessoas = []
let update = null


$("form").on("submit", (event) => {
    event.preventDefault()
    let dados = obterDados()
    console.log("Recebi",dados);

    if($("#add").is(":visible")) {
        pessoas.push(dados)
        console.log(pessoas)
        escreverTabela()
        console.log("Added")
    } else {
        console.log("Updated")
    }
 })

 function obterDados() {
    let nome = $("#nome").val()
    let idade = $("#idade").val()
    let cidade = $("#cidade").val()

    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    }
 }

function escreverTabela() {
    $("tbody").empty()
    
    pessoas.forEach(pessoa => {
        $("tbody").append(
            $("<tr>").append(
                $("<td>", {text:pessoa.nome}),
                $("<td>", {text:pessoa.idade}),
                $("<td>", {text:pessoa.cidade}),
                $("<td>").append(
                    $("<button>", {
                        class: "btn btn-outline-primary",
                        text:"Edit",
                        click: function() {
                            update = pessoa
                            $("#nome").val(pessoa.nome)
                            $("#idade").val(pessoa.idade)
                            $("#cidade").val(pessoa.cidade)
                            $("#add").hide()
                            $("#update").show()
                        }
                    }),
                    
                ),

            )
        )
    });
}