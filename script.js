document.addEventListener("DOMContentLoaded", function () {
    let serviciosLink = document.querySelector("nav ul li a[href='#servicios']");
    let listaServicios = document.getElementById("lista-servicios");

    if (serviciosLink && listaServicios) {
        serviciosLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (listaServicios.style.display === "none" || listaServicios.style.display === "") {
                listaServicios.style.display = "block";
            } else {
                listaServicios.style.display = "none";
            }
        });
    }
});
