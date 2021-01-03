import React from 'react';
import {Link} from 'react-router-dom';

export default function LoggedUser(props) {
    console.log(props.id)
    if (props.id) {
        return(
            <Link to="/logout">Logout</Link>
        )
    }
    else {
        return(
            <Link to="/login">Login</Link>
        )
    }
    // return (
    //     <div>Signed in as {props.id}</div>
    // )
}