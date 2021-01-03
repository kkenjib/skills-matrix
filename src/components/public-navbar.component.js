import React from "react";
import {Link} from 'react-router-dom';

export default function PublicNavbar() {
    return (
        <div className="navbar">
            <h2><Link to="/skills-matrix/" className="navband">Skills Matrix</Link></h2>
            {/* <Link to="/edit/:id" className="nav">Edit Courses</Link> */}
            <p><Link to="/skills-matrix/course" className="nav">Add Course</Link></p>
            {/* <Link to="/login" className="nav">Login</Link> */}
            <p><Link to="/skills-matrix/user" className="nav">Register</Link></p>
        </div>
    )
}