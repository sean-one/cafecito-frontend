import React from 'react';

import Login from './login/login';

const Admin = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') || false;
    // console.log(sessionStorage)
    return (
        <div>
            {isLoggedIn
            ? <h1>dis be dat admin page yo!</h1>
            : <Login />
            }
        </div>
    )
}

export default Admin;