import axios from 'axios';
import React, { useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Redirect} from 'react-router-dom';

export default function CreateLog(props) {
    const [submitted, setSubmitted] = useState([]);
    const [date, setDate] = useState(new Date());
    const [minutes, setMinutes] = useState([]);
    const [progress, setProgress] = useState([]);
    const passedProps = props.location.pathProps;
    const category = passedProps.pathCat;
    const provider = passedProps.pathProv;
    const institution = passedProps.pathInst;
    const course = passedProps.pathCourse;
    const user = sessionStorage.getItem('user')
    console.log(passedProps)
    console.log(category)

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = {user,date,minutes,progress,category,provider,institution,course};
        // send the username and password to the server
        await axios.post(
            'https://kkenjib-skills-matrix.herokuapp.com/timelog/add',
            formData
        );
        setSubmitted("y")
    }
    if (submitted==="y") {
        return (
            <Redirect to="/skills-matrix" />
        )
    }
    else {
    return (
        <div><center>
            <h3>Course Progress</h3>
            <h4>for {passedProps.pathCourse} by {passedProps.pathInst} provided by {passedProps.pathProv}</h4>
            <p>Date: </p>
            <p><DatePicker selected={date} onChange={date => setDate(date)} /></p>
            <form onSubmit={handleSubmit}>
                <p><label htmlFor="minutes">Time (in minutes): </label></p>
                <input
                    type="text"
                    value={minutes}
                    placeholder="0"
                    onChange={({ target }) => setMinutes(target.value)}
                />
                <p><label htmlFor="progress">Course Progress: </label></p>
                <input
                    type="radio"
                    value="In Progress"
                    checked={progress==="In Progress"}
                    onChange={({ target }) => setProgress(target.value)}
                />In Progress
                <input
                    type="radio"
                    value="Complete"
                    checked={progress==="Complete"}
                    onChange={({ target }) => setProgress(target.value)}
                />Complete
                <p><button type="submit">Submit</button></p>
            </form>
        </center></div>
    )};
   }

