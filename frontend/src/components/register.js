import { React, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000";

function Register(props) {
  const initialUser = {
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);

  function registerUser() {
    console.log(user);
    axios.post(`${baseURL}/user/add`, user).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
  }

  function handleUserChange(e) {
    setUser({ ...user, username: e.target.value });
    console.log(user);
  }

  function handleEmailChange(e) {
    setUser({ ...user, email: e.target.value });
    console.log(user);
  }

  function handlePasswordChange(e) {
    setUser({ ...user, password: e.target.value });
    console.log(user);
  }

  return (
    <div class="row align-items-center">
      <div class="col-8 text-center px-5">
        <img
          src="https://cdn1.iconfinder.com/data/icons/discover-2/4000/4-256.png"
          alt=""
        />
      </div>
      <div class="col-4 text-center px-5">
        <input
          class="form-control mb-2"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={handleUserChange}
        />
        <input
          class="form-control mb-2"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={handleEmailChange}
        />
        <input
          class="form-control mb-2"
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={handlePasswordChange}
        />
        <input
          class="form-control mb-2"
          type="text"
          placeholder="Confirm password"
        />
        <button
          class="btn btn-primary mx-2"
          onClick={() => {
            props.history.push("/login");
          }}
        >
          Login
        </button>
        <button class="btn btn-secondary mx-2" onClick={registerUser}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
