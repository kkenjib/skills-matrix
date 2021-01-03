import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BoxCat from './box-cat.component';

export default function BoxOne (props) {
    const [courses, setCourses] =useState([]);
    const [expanded, setExpanded] = useState(false);
    let user = sessionStorage.getItem('user');

    useEffect(() => {
        user = sessionStorage.getItem('user');
        axios.get('https://kkenjib-skills-matrix.herokuapp.com/courses/box/' + user + '/' + props.box)
            .then(response => setCourses(response.data));
    }, []);

    if (expanded) {
    return (
        <div>
            {courses.map(course => 
            <div>
                <button onClick={() => setExpanded(!expanded)}>Collapse</button>
                Category: {course}
                <BoxCat box={props.box} cat={course} />
            </div>
            )}
        </div>
    )
    }
    else {
        return (
            <div>
                {courses.map(course => 
                <div>
                    <button onClick={() => setExpanded(!expanded)}>Expand</button>
                    Category: {course}
                </div>
                )}
            </div>
        )
    }
}