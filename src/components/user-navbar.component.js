import React, {useState} from "react";
import {Link} from 'react-router-dom';

export default function UserNavbar() {
    const [clicked, setClicked] = useState("");
    const handleLogout = () => {
        sessionStorage.clear();
        setClicked("done");
      };

    return (
        <div className="navbar">
            <Link to="/skills-matrix/" className="navband">Skills Matrix</Link>
            {/* <Link to="/edit/:id" className="nav">Edit Courses</Link> */}
            <Link to="/skills-matrix/course" className="nav">Create Records</Link>
            {/* <Link to="/login" className="nav">Login</Link> */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}