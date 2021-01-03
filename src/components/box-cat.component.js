import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BoxProv from './box-prov.component';

export default function BoxCat (props) {
    const [courses, setCourses] =useState([]);
    const [expanded, setExpanded] = useState(false);
    let user = sessionStorage.getItem('user');
    useEffect(() => {
        user = sessionStorage.getItem('user');
        axios.get('http://localhost:8000/courses/box/' + user + '/' + props.box + '/' + props.cat)
            .then(response => setCourses(response.data));
    }, []);
    if (expanded) {
        return (
            <div>
                {courses.map(course => 
                <div>
                    <button onClick={() => setExpanded(!expanded)}>Collapse</button>
                    Course Provider: {course}
                    <BoxProv box={props.box} cat={props.cat} prov={course} />
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
                    Course Provider: {course}
                </div>
                )}
            </div>
        )    
    }
}