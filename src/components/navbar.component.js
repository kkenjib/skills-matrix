import React, {Component, useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import UserNavbar from './user-navbar.component';
import PublicNavbar from './public-navbar.component';



export default function NavBar()  {
    
    const [clicked, setClicked] = useState("");

    const handleLogout = () => {
    sessionStorage.clear();
    setClicked("done");
    };

        console.log(sessionStorage.getItem('user'))
        if (sessionStorage.getItem('user')) {
            return <button onClick={handleLogout}>Logout</button>
        }
        else {
            return <div><PublicNavbar /></div>
        }
        // return (
        //     <div className="navbar">
        //         <Link to="/" className="navband">Course Tracker</Link>
        //         <Link to="/edit/:id" className="nav">Edit Courses</Link>
        //         <Link to="/course" className="nav">Create Records</Link>
        //         <Link to="/user" className="nav">Create User</Link>
        //     </div>
        // )
}