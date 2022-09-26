import axios from "axios";
import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSignin = () => {
    const payload = {
      email,
      password,
      age,
    };
    axios
      .post(`https://blogappnem111.herokuapp.com/user/signup`, payload)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div>
        <h2>Sign In here</h2>
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
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignin}>Sign In</button>
      </div>
    </div>
  );
};

export default Signin;
