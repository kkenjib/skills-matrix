import React, { useState, useEffect } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
        'https://kkenjib-skills-matrix.herokuapp.com/login',
      user
    );
  if (JSON.parse(JSON.stringify(response.data)).token === 'Accepted') { 
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    sessionStorage.setItem('user', response.data.username)
    console.log(response.data)
    console.log(sessionStorage.getItem('user'))
  }

  if (JSON.parse(JSON.stringify(response.data)).token === 'Rejected') { 
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    // sessionStorage.setItem('user', response.data)
    console.log(response.data)
    console.log(sessionStorage.getItem('user'))
  }

};

  let rejection = "";

  // const handleLogout = () => {
  //   setUser({});
  //   setUsername("");
  //   setPassword("");
  //   sessionStorage.clear();
  // };

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
    // console.log(sessionStorage.getItem("user"))
  }, [user]);

// if there's a user show the message below
  if (user) {
  if (user.token === 'Accepted') {
    return (
      <div>
        <Redirect to="/skills-matrix" />
        {/* <div>{user.username} is logged in</div>
        <button onClick={handleLogout}>logout</button> */}
      </div>
    );
  }

  if (user.token === 'Rejected') {
      rejection = <p>Invalid credentials, please try again</p>
  }
}

  // if there's no user, show the login form
  return (
    <div>
    <center>{rejection}
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="Enter your username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    </center>
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {Redirect} from 'react-router-dom';

// export default function Login() {
//   const [username, setUsername] = useState([]);
//   const [password, setPassword] = useState([]);
//   const [user, setUser] = useState([]);

//   useEffect (() => {
//     const loggedInUser = sessionStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = loggedInUser;
//       setUser(foundUser);
//     }
//     // console.log(sessionStorage.getItem("user"))
//   }, [user]);

//   return (
//     <div>
//       {/* {rejection} */}
//     <form>
//       <label htmlFor="username">Username: </label>
//       <input
//         type="text"
//         value={username}
//         placeholder="enter a username"
//         onChange={({ target }) => setUsername(target.value)}
//       />
//       <div>
//         <label htmlFor="password">password: </label>
//         <input
//           type="password"
//           value={password}
//           placeholder="enter a password"
//           onChange={({ target }) => setPassword(target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//     </div>
//   );
// };