import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Author, setAuthor] = useState("");
  const [Content, setContent] = useState("");
  const token = localStorage.getItem("blog_token");

  const handleAddBlog = () => {
    const payload = {
      Title,
      Category,
      Author,
      Content,
    };
    
    axios
      .post(`http://localhost:8080/blogs/create`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2> Create a new blog here</h2>
      <div>
        <div>
          <input
            type="text"
            placeholder="Add Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Add Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleAddBlog}>Add Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
