document.addEventListener("DOMContentLoaded", function () {
    let serviciosLink = document.querySelector("nav ul li a[href='#servicios']");
    let listaServicios = document.getElementById("lista-servicios");

    if (serviciosLink && listaServicios) {
        serviciosLink.addEventListener("click", function (event) {
            event.preventDefault();
            listaServicios.classList.toggle("mostrar");
        });
    }
});
