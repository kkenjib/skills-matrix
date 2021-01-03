import React from 'react';
import {Redirect} from 'react-router-dom';

export default function Logout() {

    sessionStorage.clear()
    return (
        <div>
            <Redirect to="/" />
        </div>
    )
}