import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function LogoutButton () {
    // let user = sessionStorage.getItem('user');

    const [token, setToken] = useState(["/skills-matrix/login"])
    const [which, setWhich] = useState(["Login"])

    const handleOut = () => {
        setToken("/skills-matrix/logout")
        setWhich('Logout')
    }
    const handleIn = () => {
        setToken("/skills-matrix/login")
        setWhich("Login")
    }

    useEffect (() => {
        setToken("/skills-matrix/login")
        setWhich("Login")
    },[])

    if (token === "/skills-matrix/login"){
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