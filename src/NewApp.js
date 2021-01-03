import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import PublicNavbar from "./components/public-navbar.component";
import CourseList from "./components/course-list.component";
import EditCourse from "./components/edit-course.component";
import CreateCourse from "./components/create-course.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import CreateLog from "./components/create-log.component";
import LoggedUser from "./components/logged-user";

function NewApp () {
    console.log(sessionStorage.getItem("user"))
    return (
        <Router>
            <div className="container">
                <PublicNavbar />
                <LoggedUser id={sessionStorage.getItem("user")}/>
                <br></br>
                <Route path="/skills-matrix/" exact component={CourseList} />
                <Route path="/skills-matrix/edit/:id" component={EditCourse} />
                <Route path="/skills-matrix/course" component={CreateCourse} />
                <Route path="/skills-matrix/user" component={CreateUser} />
                <Route path="/skills-matrix/login" component={Login} />
                <Route path="/skills-matrix/logout" component={Logout} />
                <Route path="/skills-matrix/timelog" component={CreateLog} />
            </div>
        </Router>
    );
}

export default NewApp;