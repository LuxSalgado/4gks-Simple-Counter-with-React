import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle
import PropTypes, { object } from "prop-types";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./secondsCounter.js";

export function Home() {
	return (
		<div className="container rounded fondo d-flex justify-content-center py-3">
			<SecondsCounter seconds={<i className="far fa-clock"></i>} />
			<SecondsCounter seconds="0" identificador="sexto-digito" />
			<SecondsCounter seconds="0" identificador="quinto-digito" />
			<SecondsCounter seconds="0" identificador="cuarto-digito" />
			<SecondsCounter seconds="0" identificador="tercer-digito" />
			<SecondsCounter seconds="0" identificador="segundo-digito" />
			<SecondsCounter seconds="0" identificador="primer-digito" />
		</div>
	);
}

let counter = 1;
let temporizador = function() {
	let aux = counter; //aux me va a ayudar a modificar el valor de counter sin afectarlo
	ReactDOM.render(
		(aux % 10).toString(), //Obtengo el valor del ultimo digito de counter
		document.getElementById("primer-digito")
	);
	aux = Math.floor(aux / 10); //Quito el ultimo numero del counter y lo guardo
	ReactDOM.render(
		(aux % 10).toString(), //Obtengo el valor del siguiente digito de counter y asi hasta el final
		document.getElementById("segundo-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("tercer-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("cuarto-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("quinto-digito")
	);
	aux = Math.floor(aux / 10);
	ReactDOM.render(
		(aux % 10).toString(),
		document.getElementById("sexto-digito")
	);
	counter++; //Incremento el valor del counter en cada iteracion
};

window.setInterval(temporizador, 1000); //Llamo a la funcion temporizador cada 1 segundo

/* Otro codigo que tambien funciona
let numero1 = 1;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;
let numero6 = 0;

let temporizador = function() {
	ReactDOM.render(
		numero1.toString(),
		document.getElementById("primer-digito")
	);
	ReactDOM.render(
		numero2.toString(),
		document.getElementById("segundo-digito")
	);
	ReactDOM.render(
		numero3.toString(),
		document.getElementById("tercer-digito")
	);
	ReactDOM.render(
		numero4.toString(),
		document.getElementById("cuarto-digito")
	);
	ReactDOM.render(
		numero5.toString(),
		document.getElementById("quinto-digito")
	);
	ReactDOM.render(
		numero6.toString(),
		document.getElementById("sexto-digito")
	);
	numero1 = numero1 + 1;
	if (numero1 == 10) {
		numero2 = numero2 + 1;
		numero1 = 0;
	}
	if (numero2 == 10) {
		numero3 = numero3 + 1;
		numero2 = 0;
	}
	if (numero3 == 10) {
		numero4 = numero4 + 1;
		numero3 = 0;
	}
	if (numero4 == 10) {
		numero5 = numero5 + 1;
		numero4 = 0;
	}
	if (numero5 == 10) {
		numero6 = numero6 + 1;
		numero5 = 0;
	}
	if (numero6 == 10) {
		numero6 = 0;
	}
};

window.setInterval(temporizador, 1000); //Llamo a la funcion temporizador cada 1 segundo
*/
