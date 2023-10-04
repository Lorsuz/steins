import { useState } from "react";
import InputField from "../forms/InputField";

function Login ( { onLogin, loginError } ) {
	const [ username, setUsername ] = useState( '' );
	const [ password, setPassword ] = useState( '' );

	const handleSubmit = ( e ) => {
		e.preventDefault();
		onLogin( username, password );
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={ handleSubmit }>
			<InputField
                    label="Digite seu úsuario:"
                    type="text"
                    name="úsuario"
                    placeholder="Digite seu úsuario"
                    text=""
                    onChange={(e) => setUsername(e.target.value)}
                ></InputField>
                <InputField
                    label="Senha:"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    text=""
                    onChange={(e) => setPassword(e.target.value)}
                ></InputField>

				{loginError && <div className="error">{loginError}</div>}
				
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default(Login)