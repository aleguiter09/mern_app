import React from "react";

function Login(props) {
  return (
    <div class="row align-items-center">
      <div class="col-8 text-center px-5">
        <img
          src="https://cdn1.iconfinder.com/data/icons/discover-2/4000/1-256.png"
          alt=""
        />
      </div>
      <div class="col-4 text-center px-5">
        <input class="form-control mb-2" type="text" placeholder="E-mail" />
        <input class="form-control mb-2" type="text" placeholder="Password" />
        <button class="btn btn-primary mx-2" onClick={() => {}}>
          Login
        </button>
        <button
          class="btn btn-secondary mx-2"
          onClick={() => {
            props.history.push("/register");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
