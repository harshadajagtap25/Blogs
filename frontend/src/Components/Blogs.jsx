import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("blog_token");

  const handleGetBlogs = () => {
    axios
      .get(`http://localhost:8080/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        setBlogs(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/blogs/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r);
        handleGetBlogs();
      })
      .catch((e) => console.log(e));
  };
  const handleEdit=(id)=>{

  }
  useEffect(() => {
    handleGetBlogs();
  }, []);
  return (
    <div>
      All Blogs Here
      <div>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.Title}</h3>
              <p>Category : {blog.Category}</p>
              <p>Author : {blog.Author}</p>
              <p>Content : {blog.Content}</p>
              <div>
                <button
                  onClick={() => {
                    handleDelete(blog._id);
                  }}
                >
                  Delete
                </button>
                <button  onClick={()=>handleEdit(blog._id)} >Edit</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
