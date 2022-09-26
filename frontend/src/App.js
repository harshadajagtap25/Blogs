import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "./Components/Blogs";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", w: "80%", justifyContent: "space-evenly" }}
      >
        <Link to="Home">Home</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="signin">Signin</Link>
        <Link to="login">Login</Link>
        <Link to="create">Create new Blogs</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/*" element={<h3>Path not found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
