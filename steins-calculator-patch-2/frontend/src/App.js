import React, { useState } from 'react';
import { Route, Routes, Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import z from 'zod';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Application from './components/private/Aplication';


const loginSchema = z.object( {
	username: z.string(),
	password: z.string().min( 6 ) 
} );

const registerSchema = z.object( {
	username: z.string(),
	password: z.string().min( 8 )
} );


function App () {
	const [ token, setToken ] = useState( '' );
	const [loginError, setLoginError] = useState('');
	const [registerError, setRegisterError] = useState('');
	
	const navigate = useNavigate();

	
	const apiUrl = 'http://localhost:3001/api'; 

	const handleRegister = async ( username, password ) => {
		try {
			const formData = { username, password };
			registerSchema.parse( formData );
		} catch (error) {
			setRegisterError("Invalid credentials");
		}
		try {
			const response = await fetch( `${ apiUrl }/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify( { username, password } ),
			} );
			const data = await response.json();
			if (!response.ok) {
				setRegisterError(data.message);
			} else {
				setRegisterError(data.message);
				console.log(data.message);
			}
		} catch ( error ) {
			console.error( 'Error:', error );
		}
	};

	const handleLogin = async ( username, password ) => {
		try {
			const formData = { username, password };
			loginSchema.parse( formData );
		} catch (error) {
			setLoginError("Credencias Invalidas, checadas no front");
		}
		try {
			const response = await fetch( `${ apiUrl }/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify( { username, password } ),
			} );
			const data = await response.json();
			if (!response.ok) {
				setLoginError(data.message); 
			} else {
				setLoginError(''); 
				console.log(data.token);
				setToken(data.token);
				navigate('/private/application');
			}
		} catch ( error ) {
			console.error( 'Error:', error );
		}
	};

	return (
		<div className="App">
			<h1>It's Adilson Time</h1>
			{!token && 
			<nav>
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
				</ul>
			</nav>}
			<Routes>
				<Route path="/login" element={ <Login onLogin={ handleLogin } loginError={loginError} /> } />
				<Route path="/register" element={ <Register onRegister={ handleRegister } registerError={registerError} /> } />
				<Route path="/private" element={ <PrivateRoute token={ token } /> } >
					<Route path='application' element={ <Application /> } />
				</Route>
				<Route index element={ <Navigate to="/login" /> } />
			</Routes>
		</div>
	);
}

function PrivateRoute ( { token } ) {
	return token ? <Outlet /> : <Navigate to="/login" />;
}


export default App;
