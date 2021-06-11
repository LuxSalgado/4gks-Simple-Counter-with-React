import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"; //include images into your bundle
import PropTypes, { object } from "prop-types";
import ReactDOM from "react-dom";
import { SecondsCounter } from "./secondsCounter.js";

export function Home() {
	return (
		<div className="container bg-dark d-flex justify-content-center py-3">
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

var numero1 = 1;
var numero2 = 0;
var numero3 = 0;
var numero4 = 0;
var numero5 = 0;
var numero6 = 0;

let temporizador = function() {
	ReactDOM.render(
		<p>{numero1.toString()}</p>,
		document.getElementById("primer-digito")
	);
	ReactDOM.render(
		<p>{numero2.toString()}</p>,
		document.getElementById("segundo-digito")
	);
	ReactDOM.render(
		<p>{numero3.toString()}</p>,
		document.getElementById("tercer-digito")
	);
	ReactDOM.render(
		<p>{numero4.toString()}</p>,
		document.getElementById("cuarto-digito")
	);
	ReactDOM.render(
		<p>{numero5.toString()}</p>,
		document.getElementById("quinto-digito")
	);
	ReactDOM.render(
		<p>{numero6.toString()}</p>,
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
