import React from 'react';
import { useHistory } from 'react-router-dom';

import AxiosInstance from '../../../helpers/axios';

import './login.css';

const Login = (props) => {
    let history = useHistory();

    const sendLogin = (e) => {
        e.preventDefault();
        if(!e.target.username.value || !e.target.password.value) {
            console.log('fill in all inputs')
        } else {
            const userDetails = {
                name: e.target.username.value,
                password: e.target.password.value
            }

            AxiosInstance.post('/auth/login', userDetails)
                .then(response => {
                    if(response.status === 200) {
                        localStorage.setItem('auth_token', response.data.token);
                        history.push('/');
                    } else {
                        throw new Error();
                    }
                    // console.log(response)
                    // console.log(props)
                })
                .catch(err => {
                    console.log(err);
                })
        }
        // console.log(userInfo)
        // setUsername("");
        // setEmail("");
        // setPassword("");
    }

    console.log()

    return (
        <div className='login'>
            <div className='loginPrompt'>
                <form className='loginForm' onSubmit={sendLogin}>
                    <label htmlFor='username'>Username:</label>
                    {/* <input type='text' id='username' name='username' value={username} onChange={e => setUsername(e.target.value)} /> */}
                    <input type='text' id='username' name='username' />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Login;