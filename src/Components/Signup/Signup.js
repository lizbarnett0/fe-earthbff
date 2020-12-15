import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';

import axios from 'axios';

const Signup = () => {
	const [newUser, setNewUser] = useState({
		email: '',
		username: '',
		password: '',
		re_password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/users/',
			data: newUser,
		}).then((res)=> {
			console.log(res)
			
		})
	};

	const handleChange = (event) => {
		event.preventDefault();
		setNewUser({ ...newUser, [event.target.name]: event.target.value });
	};

	return (
		<div className='signup-page'>
			<div className='signup-container'>
				<div className='signup-form-container'>
					<form onSubmit={handleSubmit}>
						<label htmlFor='email'>
							<b>Email</b>
						</label>
						<input
							type='email'
							name='email'
							value={newUser.email}
							onChange={handleChange}
							placeholder='user@example.com'></input>
						<label htmlFor='username'>
							<b>Username</b>
						</label>
						<input
							type='text'
							name='username'
							value={newUser.username}
							onChange={handleChange}
							placeholder='username'></input>
						<label htmlFor='password'>
							<b>Password</b>
						</label>
						<input
							type='password'
							name='password'
							value={newUser.password}
							onChange={handleChange}
							placeholder='Password'></input>
						<label htmlFor='re_password'>
							<b>Re-Type Password</b>
						</label>
						<input
							type='password'
							name='re_password'
							value={newUser.re_password}
							onChange={handleChange}
							placeholder='Re-Type Password'></input>

						<button type='submit'>Sign Up</button>
					</form>
					<Link to={'/login'}>
						<p> Already have an account? Click to Login.</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;