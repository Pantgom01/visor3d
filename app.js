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

    });

    visor.addEventListener("model-loaded", () => {
        console.log("Nuevo script cargado");
        console.log("Modelo cargado");

        const objeto = visor.getObject3D("mesh");

        if (!objeto) {
            console.log("No existe mesh");
            return;
        }

        // Caja envolvente
        const caja = new THREE.Box3().setFromObject(objeto);

        const tamaño = new THREE.Vector3();
        caja.getSize(tamaño);

        console.log("Tamaño:", tamaño);

        const centro = new THREE.Vector3();
        caja.getCenter(centro);

        console.log("Centro:", centro);

        // Centrar el modelo
        objeto.position.sub(centro);

        // Calcular el mayor lado
        const mayor = Math.max(tamaño.x, tamaño.y, tamaño.z);

        console.log("Mayor lado:", mayor);

        // Queremos que mida unos 10 cm
        const escala = 0.10 / mayor;

        console.log("Escala:", escala);

        objeto.scale.setScalar(escala);

    });

});
