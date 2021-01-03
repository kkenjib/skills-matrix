import React, {Component} from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);  
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
        
        this.state = {
          name: '',
          username: '',
          email: '',
          password: '',
          submitted: ''
        };
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();  
        const newUser = {
          name: this.state.name,
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        };  
        
        console.log(newUser);
        axios.post('https://kkenjib-skills-matrix.herokuapp.com/login/create', newUser)
            .then(res => console.log(res.data))
            .catch(error=>{
                console.log(error)
            });
        
        this.setState({
            name: '',
            username: '',
            email: '',
            password: '',
            submitted: 'y'
        })
    }

    render() {
        if (this.state.submitted === 'y') {
            return (
                <div>
                    <Redirect to="/skills-matrix/" />
                </div>
            )
        } else{
        return (
            <div>
            <center>
                <h3>Create New User</h3>
                <h5>You will need to login after</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        placeholder="Display Name"
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        placeholder="Sign In Name"
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        placeholder="For notifications"
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Password: </label>
                    <input  type="password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </center>
            </div>
        )
        }
    }
}