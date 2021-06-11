import React from "react";
import PropTypes, { object } from "prop-types";

export function SecondsCounter(props) {
	return (
		<div
			className="border border-white bg-secondary rounded display-2 text-white d-flex align-items-center justify-content-center mx-3 digito"
			id={props.identificador}>
			<p>{props.seconds}</p>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.string.isRequired, // Necesario el .isRequired
	identificador: PropTypes.string.isRequired // Necesario el .isRequired
};
