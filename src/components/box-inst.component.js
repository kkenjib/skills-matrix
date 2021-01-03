import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export default function BoxInst (props) {
    const [courses, setCourses] =useState([]);
    let user = sessionStorage.getItem('user');
    useEffect(() => {
        user = sessionStorage.getItem('user');
        axios.get('https://kkenjib-skills-matrix.herokuapp.com/courses/box/' + user + '/' + props.box + '/' + props.cat + '/' + props.prov + '/' + props.inst)
            .then(response => setCourses(response.data));
    }, []);

    return (
        <div>
            {courses.map(course => 
            <div>
                Course: {course}
                <Link to={{
                    pathname: "/skills-matrix/timelog",
                    pathProps: {
                        pathUser: user,
                        pathCat: props.cat,
                        pathProv: props.prov,
                        pathInst: props.inst,
                        pathCourse: course
                    }
                }}><button type="button">Log Progress</button></Link>
            </div>
            )}
        </div>
    )
}