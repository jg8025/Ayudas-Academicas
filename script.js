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

document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let curso = urlParams.get("curso");

    if (!curso) {
        curso = "No especificado";
    }

    // Evita que se inyecte código en el título del curso
    document.getElementById("curso-seleccionado").textContent = "Estás inscribiéndote en el curso de " + escapeHTML(curso);

    document.getElementById("formulario-inscripcion").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener valores y eliminar espacios en blanco
        let nombre = document.getElementById("nombre").value.trim();
        let identificacion = document.getElementById("identificacion").value.trim();
        let direccion = document.getElementById("direccion").value.trim();
        let empresa = document.getElementById("empresa").value.trim();
        let celular = document.getElementById("celular").value.trim();
        let email = document.getElementById("email").value.trim();

        // Expresiones regulares para validar los campos
        let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,50}$/;
        let regexIdentificacion = /^\d{1,20}$/;
        let regexDireccion = /^.{1,50}$/; // Acepta cualquier carácter hasta 50
        let regexEmpresa = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{1,30}$/;
        let regexCelular = /^\d{1,20}$/;
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validar los campos
        if (!regexNombre.test(nombre)) {
            alert("El campo 'Nombres y apellidos' solo puede contener letras y espacios (máx. 50 caracteres).");
            return;
        }
        if (!regexIdentificacion.test(identificacion)) {
            alert("El campo 'Número de Identificación' solo puede contener números (máx. 20 caracteres).");
            return;
        }
        if (!regexDireccion.test(direccion)) {
            alert("El campo 'Dirección de residencia' debe tener un máximo de 50 caracteres.");
            return;
        }
        if (!regexEmpresa.test(empresa)) {
            alert("El campo 'Empresa' solo puede contener letras, números y espacios (máx. 30 caracteres).");
            return;
        }
        if (!regexCelular.test(celular)) {
            alert("El campo 'Celular' solo puede contener números (máx. 20 caracteres).");
            return;
        }
        if (!regexEmail.test(email)) {
            alert("Ingrese un correo electrónico válido.");
            return;
        }

        // **Escapar datos antes de almacenarlos para prevenir XSS**
        let usuarioSeguro = {
            nombre: escapeHTML(nombre),
            identificacion: escapeHTML(identificacion),
            direccion: escapeHTML(direccion),
            empresa: escapeHTML(empresa),
            celular: escapeHTML(celular),
            email: escapeHTML(email),
            curso: escapeHTML(curso),
        };

        // Guardar datos en almacenamiento local
        localStorage.setItem("usuario", JSON.stringify(usuarioSeguro));

        // Redirigir a la página de pago
        window.location.href = "pago.html";
    });
});

/**
 * Función para evitar ataques XSS: escapa caracteres peligrosos
 */
function escapeHTML(str) {
    return str.replace(/[&<>"'/]/g, function (match) {
        const escapeMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
            "/": "&#x2F;",
        };
        return escapeMap[match];
    });
}
