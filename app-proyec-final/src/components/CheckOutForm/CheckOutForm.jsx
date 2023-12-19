import { useState } from "react";
import "./CheckOutForm.css";

export const CheckOutForm = ({ order }) => {
	const [inputValues, setInputValues] = useState({
		name: "",
		teléfono: "",
		email: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	const handleForm = (event) => {
		event.preventDefault();
		setInputValues({
			name: "",
			teléfono: "",
			email: "",
		});
		order(inputValues);
	};
	
	return (
		<div className="container formContainer">
			<h3 className="header-h3">
				Introduzca sus datos para generar la orden de compra
			</h3>
			<form className="checkStyle" onSubmit={handleForm}>
				
				<input
					id="input-text"
					className="checkInput"
					type="text"
					name="name"
					value={inputValues.name}
					placeholder="Nombre"
					onChange={handleChange}
				/>
								
				<input
					id="input-phone"
					className="checkInput"
					type="phone"
					name="teléfono"
					value={inputValues.teléfono}
					placeholder="Numero de teléfono"
					onChange={handleChange}
				/>
		
				<input
					id="input-email"
					className="checkInput"
					type="email"
					name="email"
					value={inputValues.email}
					placeholder="Correo"
					onChange={handleChange}
				/>
				
				<button type="submit" className="button">Crear Orden</button>
			</form>
		</div>
	);
};
