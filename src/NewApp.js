import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import PublicNavbar from "./components/public-navbar.component";
import CourseList from "./components/course-list.component";
import EditCourse from "./components/edit-course.component";
import CreateCourse from "./components/create-course.component";
import CreateUser from "./components/create-user.component";
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import LogoutButton from "./components/logout-button.component";
import CreateLog from "./components/create-log.component";
import LoggedUser from "./components/logged-user";

function NewApp () {
    console.log(sessionStorage.getItem("user"))
    return (
        <Router>
            <div className="container">
                <PublicNavbar />
                {/* <LogoutButton /> */}
                <LoggedUser id={sessionStorage.getItem("user")}/>
                <br></br>
                <Route path="/" exact component={CourseList} />
                <Route path="/edit/:id" component={EditCourse} />
                <Route path="/course" component={CreateCourse} />
                <Route path="/user" component={CreateUser} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/timelog" component={CreateLog} />
            </div>
        </Router>
    );
}

export default NewApp;