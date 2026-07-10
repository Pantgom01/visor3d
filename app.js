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
        visor.object3D.position.set(0,0,0);
        visor.object3D.rotation.set(0,0,0);
        visor.object3D.scale.set(1,1,1);
        visor.setAttribute("visible", true);
        visor.setAttribute("visible", true);

    });

    visor.addEventListener("model-loaded", (e) => {
       console.log("MODELO CARGADO");

    });

});
