import React from 'react';
import AxiosInstance from '../../helpers/axios';

import './registration.css';

const Registration = () => {

    const sendRegistration = (e) => {
        e.preventDefault();
        if (e.target.password.value === e.target.passwordconfirm.value) {
            const userDetails = {
                name: e.target.name.value,
                password: e.target.password.value,
                email: e.target.email.value
            }
            
            AxiosInstance.post('/auth/register', userDetails)
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            console.log('no go!')
        }
        // console.log(e);
    }

    return (
        <div className='registration'>
            <div className='registrationPrompt'>
                {/* <form className='registrationForm' onSubmit={test}> */}
                <form className='registrationForm' onSubmit={sendRegistration}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' />
                    {/* <input type='text' id='name' name='name' value={name} onChange={e => setUsername(e.target.value)} /> */}
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' />
                    <label htmlFor='passwordconfirm'>Confirm Password:</label>
                    <input type='password' id='passwordconfirm' name='passwordconfirm' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    )
}

export default Registration;