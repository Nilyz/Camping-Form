//DOM
let personas = document.getElementById("persona");
let nino = document.getElementById("nino");
let coche = document.getElementById("coche");
let caravana = document.getElementById("caravana");
let autocaravana = document.getElementById("autocaravana");
let tiendas = document.getElementById("tiendas");
let autocar = document.getElementById("autocar");
let motos = document.getElementById("motos");
let electricidad = document.getElementById("electricidad");
let agua = document.getElementById("agua");

let TemporadaAlta = document.getElementById("temporadaAlta");
let TemporadaBaja = document.getElementById("temporadaBaja");
let presupuesto = document.getElementById("presupuesto");
let btn = document.getElementById("btn");

//VARIABLES
let valorPersonas;
let valorNino;
let valorCoche;
let valorCaravana;
let valorAutocaravana;
let valorTiendas;
let valorAutocar;
let valorMotos;
let valorElectricidad;
let valorAgua;
let temporada;
let precioFinal = 0;

//FUNCIONES
//obtengo las cantidades de los input 
const obtenerValores = () => {
    valorPersonas = personas.value;
    valorNino = nino.value;
    valorCoche = coche.value;
    valorCaravana = caravana.value;
    valorAutocaravana = autocaravana.value;
    valorTiendas = tiendas.value;
    valorAutocar = autocar.value;
    valorMotos = motos.value;

    if (electricidad.checked) {
        valorElectricidad = 5;
    } else {
        valorElectricidad = 0;
    }
    if (agua.checked) {
        valorAgua = 3.5;
    } else {
        valorAgua = 0;
    }

    //priemro obtengo los valores y después ejecutas la función que calcula el presupuesto total
    calcularTemporada();
};

const calcularTemporada = () => {
    //compruebo si se eligió temporada alto o baja y cmabio los precios según la opción
    if (TemporadaAlta.checked) {
        precioFinal =
            valorPersonas * 7.15 +
            valorNino * 4.1 +
            valorCoche * 7.25 +
            valorCaravana * 7.25 +
            valorAutocaravana * 14.5 +
            valorTiendas * 7.25 +
            valorAutocar * 18 +
            valorMotos * 4 +
            valorElectricidad +
            valorAgua;
    } else if (TemporadaBaja.checked) {
        precioFinal =
            valorPersonas * 5.75 +
            valorNino * 3.5 +
            valorCoche * 5.75 +
            valorCaravana * 5.75 +
            valorAutocaravana * 8.5 +
            valorTiendas * 5.75 +
            valorAutocar * 16 +
            valorMotos * 3 +
            valorElectricidad +
            valorAgua;
    }
    console.log(precioFinal);
};

//
const ver = () => {
    obtenerValores();
    presupuesto.innerText = precioFinal.toFixed(2);
};

btn.addEventListener("click", ver);
