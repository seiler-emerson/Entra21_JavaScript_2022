// $.ajax()

// $.ajax(
//     {

//     }
// )


//REQUISIÇÃO PARA IDENTIFICAR IP
$("#meu_ip").on("click", function () {
    $.ajax({
        url: "https://httpbin.org/ip",
        type: "get",
        success: function (retorno) {
            console.log("Opa funcionaou", retorno)
        },
        error: function (motivo) {
            console.log("Deu ruim", motivo)
        },
    })
})


//
$("#eco_get").on("click", function () {

    // console.log("Normal","https://httpbin.org/get?nome=Emerson Seiler&idade=27");
    // console.log("Normal",encodeURI("https://httpbin.org/get?nome=Emerson Seiler&idade=27"));
    // console.log("DECODE",decodeURIComponent("https://httpbin.org/get?nome=Emerson%20Seiler&idade=27"));
    $.ajax(
        {
            url: "https://httpbin.org/get?nome=Emerson Seiler&idade=27",
            type: "get",
            success: function (retorno) {
                console.log("Deu certo", retorno.args)
            },
            error: function (motivo) {
                console.warn("Deu ruim", motivo)
            },
        }
    )
})

$("#delay_get").on("click", () => {

    let numero = $("#tempo").val()

    $.ajax(
        {
            url: encodeURI("https://httpbin.org/delay/" + numero),
            type: "get",
            success: (retorno) => {
                console.log("Demorou mas deu certo");
            },
            error: (motivo) => {
                console.warn("Erro chega rapido como sempre", motivo)
            }
        }
    )
})

//SINTAXE POST

$("#eco_post").on("click", function () {

    var objeto = {
        nome: $("#nome").val(),
        email: $("#email").val()
    };

    $.ajax({
        url: "https://httpbin.org/post",
        type: 'post',
        headers: {
            'Accept': "application/json",
            'Content-type': 'application/json',
        },
        data: JSON.stringify(objeto),//converte objeto em string
        success: function (retorno) {
            // alert("Veja os dados retornados no console...")
            console.log("Funcionou", retorno)
        },
        error: function (error) {
            alert("Algo nao esta correto...")
            console.error(error)
        }
    })

})

$("#")