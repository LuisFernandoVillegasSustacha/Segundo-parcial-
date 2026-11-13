
let diapositivas = document.getElementsByClassName("diapositiva");

let posicion = 0;

function mostrarDiapositiva() {

    for (let i = 0; i < diapositivas.length; i++) {

        diapositivas[i].classList.remove("activa");

    }

    diapositivas[posicion].classList.add("activa");

    document.getElementById("contador").textContent =
        (posicion + 1) + " / " + diapositivas.length;

}

document.getElementById("siguiente").onclick = function() {

    if (posicion < diapositivas.length - 1) {

        posicion++;

        mostrarDiapositiva();

    }

};

document.getElementById("anterior").onclick = function() {

    if (posicion > 0) {

        posicion--;

        mostrarDiapositiva();

    }

};

mostrarDiapositiva();

