import { useContext } from 'react';
import Layout from '../../layouts/PagesLayout';
import { useState } from 'react';
import { registerSchema } from '../../config/registerSchema';
import AuthContext from '../../context/AuthContext';

function FormRegister(): React.FunctionComponentElement<JSX.Element> {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [registerError, setRegisterError] = useState('');
	const { apiUrl } = useContext(AuthContext);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		console.log(username, password);

		try {
			const formData = { username, password };
			registerSchema.parse(formData);
		} catch (error) {
			setRegisterError('Invalid credentials');
		}

		try {
			const response = await fetch(`${apiUrl}/register`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			});
			const data = await response.json();

			if (!response.ok) {
				setRegisterError(data.message);
			} else {
				setRegisterError(data.message);
				console.log(data.message);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<Layout title='Register Form'>
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
				<input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
				{registerError && <div className='error'>{registerError}</div>}
				<button type='submit'>Register</button>
			</form>
		</Layout>
	);
}
export default FormRegister;
