import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BoxInst from './box-inst.component';

export default function BoxProv (props) {
    const [courses, setCourses] =useState([]);
    const [expanded, setExpanded] = useState(false);
    let user = sessionStorage.getItem('user');
    useEffect(() => {
        user = sessionStorage.getItem('user');
        axios.get('http://localhost:8000/courses/box/' + user + '/' + props.box + '/' + props.cat + '/' + props.prov)
            .then(response => setCourses(response.data));
    }, []);
    if (expanded) {
        return (
            <div>
                {courses.map(course => 
                <div>
                    <button onClick={() => setExpanded(!expanded)}>Collapse</button>
                    Institution: {course}
                    <BoxInst box={props.box} cat={props.cat} prov={props.prov} inst={course} />
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
                    Institution: {course}
                </div>
                )}
            </div>
        )
    }
}