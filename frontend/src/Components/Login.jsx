import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };
    axios
      .post(`http://localhost:8080/user/login`, payload)
      .then((r) => {
        console.log(r.data.token);
        if (r.data.token) {
          localStorage.setItem("blog_token", r.data.token);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div>
        <h2>Login here</h2>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
