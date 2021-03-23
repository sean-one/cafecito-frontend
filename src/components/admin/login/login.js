import React, { useState } from 'react';
import AxiosInstance from '../../../helpers/axios';

import './login.css';

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const test = async (e) => {
        e.preventDefault();
        const userDetails = {
            username,
            email,
            password
        }
        const userInfo = await AxiosInstance.post('/clients/login', userDetails);
        // console.log(userInfo)
        setUsername("");
        setPassword("");
    } 

    return (
        <div className='login'>
            <div className='loginPrompt'>
                <form className='loginForm' onSubmit={test}>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)} />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    {/* <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} /> */}
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Login;