$("<body>", {class: "container bg-dark mt-3"}).append(
    $("<header>", {class: "row"}).append(
        $("<section>", {class: "col"}).append(
            $("<div>", {class:"card"}).append(
                $("<div>", {class: "card-body"}).append(
                    $("<h1>", {text: "Menu Principal", class: "text-center"})
                ),
                $("<div>", {class: "card-footer border-0"}).append(
                    $("<ul>", {class: "d-flex list-unstyled justify-content-center"}).append(
                        $("<li>", {class: "me-4 btn btn-primary"}).append(
                            $("<a>", {href: "horizontal.html", text: "Horizontal", class: "text-decoration-none text-light"})
                        ),
                        $("<li>", {class: "me-4 btn btn-outline-primary"}).append(
                            $("<a>", {href: "./pagina1.html", text: "Vertical", class: "text-decoration-none"})
                        ),
                        $("<li>", {class: "me-4 btn btn-outline-primary"}).append(
                            $("<a>", {href: "./crud.html", text: "CRUD", class: "text-decoration-none"})
                        )
                    )
                )
            )
        )
    ),
    $("<main>", {class: "row"}).append(
        $("<section>", {class: "col"}).append(
            $("<div>", {class: "card"}).append(
                $("<div>", {class: "card-body"}).append(
                    $("<p>", {text: "Página prática desenvolvida durante a aula de jQuery do módulo JavaScript", class: "text-center"}),
                    $("<p>", {text: "Tecnologias utilizadas:", class: "text-center"}),
                    $("<div>", {class: "d-flex justify-content-center"}).append(
                        $("<table>", {class: "table table-primary table-striped"}).append(
                            $("<Thead>", {class: "bg-primary text-center text-light"}).append(
                                $("<th>", {text:"Tecnologia"}),
                                $("<th>", {text:"Logo"})
                            ),
                            $("<Tbody>", {class: "text-center"}).append(
                                $("<tr>").append(
                                    $("<td>", {text:"jQuery"}),
                                    $("<td>",).append(
                                        $("<img>", {src: "./img/jquery.png", class: "pe-2"})
                                    )
                                ),
                                $("<tr>").append(
                                    $("<td>", {text:"JavaScript"}),
                                    $("<td>",).append(
                                        $("<img>", {src: "./img/javascript.png", class: "pe-2"})
                                    )
                                ),
                                $("<tr>").append(
                                    $("<td>", {text:"HTML5"}),
                                    $("<td>",).append(
                                        $("<img>", {src: "./img/html5.png", class: "pe-2"})
                                    )
                                ),
                                $("<tr>").append(
                                    $("<td>", {text:"CSS3"}),
                                    $("<td>",).append(
                                        $("<img>", {src: "./img/css3.png", class: "pe-2"})
                                    )
                                ),
                                $("<tr>").append(
                                    $("<td>", {text:"Bootstrap"}),
                                    $("<td>",).append(
                                        $("<img>", {src: "./img/bootstrap.png", class: "pe-2"})
                                    )
                                ),
                            )
                        ),
                    )
                ),
                $("<div>", {class: "card-footer"}).append(
                    $("<footer>")
                )
            )
        )
    )
).appendTo("html")

$("html").addClass("bg-dark")