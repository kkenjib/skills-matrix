import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function LogoutButton () {
    // let user = sessionStorage.getItem('user');

    const [token, setToken] = useState(["/login"])
    const [which, setWhich] = useState(["Login"])

    const handleOut = () => {
        setToken("/logout")
        setWhich('Logout')
    }
    const handleIn = () => {
        setToken("/login")
        setWhich("Login")
    }

    useEffect (() => {
        setToken("/login")
        setWhich("Login")
    },[])

    if (token === "/login"){
    return (
        <div>
            <Link to={token} className="nav" onClick={handleOut}>{which}</Link>
        </div>
    )
    }
    else {
        return (
            <div>
                <Link to={token} className="nav" onClick={handleIn}>{which}</Link>
            </div>
        )
    }

}