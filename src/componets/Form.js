import React from 'react';

function Form(){
	return(
		<form>
			<input type="text"
			   	   className="input"
				   placeholder="Ingresa una tarea"/>
			<button className="button">Enviar</button>
		</form>
	)
};

export default Form;