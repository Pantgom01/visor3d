window.addEventListener("DOMContentLoaded", () => {

    console.log("DOM cargado");

    const input = document.getElementById("archivo");
    const visor = document.getElementById("visor");

    console.log("input:", input);
    console.log("visor:", visor);

    let urlActual = null;

    input.addEventListener("change", function () {

        console.log("Cambio de archivo");

        const archivo = this.files[0];

        if (!archivo) return;

        if (urlActual) {
            URL.revokeObjectURL(urlActual);
        }

        urlActual = URL.createObjectURL(archivo);

        console.log("URL:", urlActual);

        console.log("Antes de asignar modelo");

        visor.setAttribute("gltf-model", urlActual);

        visor.setAttribute("visible", true);

        console.log("Modelo asignado");

    });

});
