import React, { Component } from 'react';
import axios from "axios";

export default class CreateCourse extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeProvider = this.onChangeProvider.bind(this);
        this.onChangeInstitution = this.onChangeInstitution.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeBox = this.onChangeBox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course: "",
            provider: "",
            institution: "",
            category: "",
            box: "1"
        }
    }

    onChangeCourse(e) {
        this.setState({
            course: e.target.value
        });
    }

    onChangeProvider(e) {
        this.setState({
            provider: e.target.value
        });
    }

    onChangeInstitution(e) {
        this.setState({
            institution: e.target.value
        });
    }
    
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }

    onChangeBox(e) {
        this.setState({
            box: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = sessionStorage.getItem('user');
        console.log(user);

        const newCourse = {
            course: this.state.course,
            provider: this.state.provider,
            institution: this.state.institution,
            category: this.state.category,
            box: this.state.box,
            user: user,
        };
        
        console.log('http://localhost:8000/courses/add/' + user);
        console.log(newCourse);
        axios.post('http://localhost:8000/courses/add/' + user, newCourse)
            .then(res => console.log(res.data));
        
        this.setState({
            course: "",
            provider: "",
            institution: "",
            category: "",
            box: ""
        })
    }

    render() {
        return (
            <div>
            <center>
                <h3>Create New Course Record</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.category}
                            placeholder="ex. Python, Marketing"
                            onChange={this.onChangeCategory}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Provider:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.provider}
                            placeholder="ex. Coursera, DataCamp"
                            onChange={this.onChangeProvider}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Institution:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.institution}
                            placeholder="ex. Stanford University"
                            onChange={this.onChangeInstitution}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Course:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.course}
                            placeholder="ex. Data Wrangling"
                            onChange={this.onChangeCourse}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Box:</label>
                        <select
                            className="form-control"
                            value={this.state.box}
                            onChange={this.onChangeBox}>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Course Record" className="btn btn-primary" />
                    </div>
                </form>
            </center>
            </div>
        )
    }
}