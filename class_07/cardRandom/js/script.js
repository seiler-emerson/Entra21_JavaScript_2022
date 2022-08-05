// ======================================== BUTTON SEARCH POKEMON ======================================== //
$("#play").on("click", ()=>{
    cleanCardArea()
    
    setTimeout(() => {
        $.ajax({
          url: "https://deckofcardsapi.com/api/deck/new/draw/?count=1", //Retorna uma carta do deck
          type: "get",
          success: function (data) {
            console.log(data.cards[0].value)
            verifyCard(data)
          },
          error: function (error) {
            console.error(error);
            alert("Error in the request");
          },
        });
    }, 1000);
    setTimeout(() => {
        $("#search_pokemon").prop("disabled",false)
    }, 1000);

})

function verifyCard(cardAPI) {
    let cardPlayer = $("#cardNumberUser").val()
    let cardServer = 0
    switch (cardAPI.cards[0].value) {
        case "ACE":
            cardServer = 1
            break;
        case "JACK":
            cardServer = 11
            break;
        case "QUEEN":
            cardServer = 12
            break;
        case "KING":
            cardServer = 13
            break;
            default:
            cardServer = cardAPI.cards[0].value

            break;
    }

    if(cardPlayer == cardServer) {
        console.log("Acertou");
        $("#result").append(
            $("<h3>", {text: "Você acertou!", id:"title1", class: "text-light"}),
            $("<h3>", {text: "Carta Sorteada:", id:"title2", class: "text-light"}),
            $("<img>", { src: cardAPI.cards[0].image, id:"cardImage"}),
        )
    } else {
        $("#result").append(
            $("<h3>", {text: "Não foi dessa vez!", id:"title1", class: "text-light"}),
            $("<h3>", {text: "Carta Sorteada:", id:"title2", class: "text-light"}),
            $("<img>", { src: cardAPI.cards[0].image, id:"cardImage"}),
        )
        console.log("Errou tente novamente");
    }

}


function cleanCardArea() {
    $("#title1").remove()
    $("#title2").remove()
    $("#cardImage").remove()
}