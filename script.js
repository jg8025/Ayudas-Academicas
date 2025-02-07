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

document.addEventListener("DOMContentLoaded", function () {
    let botonInscribirse = document.querySelector(".microsoft365-button");
    
    if (botonInscribirse) {
        botonInscribirse.addEventListener("click", function (event) {
            alert("¡Estás a punto de inscribirte en el curso de Microsoft 365!");
        });
    }
});

