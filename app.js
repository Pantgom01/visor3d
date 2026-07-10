window.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("archivo");
    const visor = document.getElementById("visor");

    let urlActual = null;

    input.addEventListener("change", function () {

        const archivo = this.files[0];

        if (!archivo) return;

        if (urlActual) {
            URL.revokeObjectURL(urlActual);
        }

        urlActual = URL.createObjectURL(archivo);

        visor.setAttribute("gltf-model", urlActual);
        visor.setAttribute("visible", true);

        console.log(urlActual);

    });

});
