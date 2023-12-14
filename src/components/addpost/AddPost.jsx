import { useEffect, useState } from "react";
import "./AddPost.scss";
import { addPost } from "../../api/api";
import Editor from "../editor/Editor";
import { TextField } from "@mui/material";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    type: "public",
    draft: false,
  });

  function clearPostData() {
    setPost({
      title: "",
      description: "",
      type: "public",
      draft: false,
    });
  }

  const addPostFunction = async () => {
    if (post.title.trim() && post.description.trim()) {
      try {
        await addPost(post);
        clearPostData();
        console.log("gnac");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    console.log(post);
  }, [post]);

  const handleInputChange = (e) => {
    setPost((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRadioChange = (e) => {
    setPost((prev) => {
      return { ...prev, [e.target.name]: e.target.dataset.visibility };
    });
  };
  const handleCheckboxChange = (e) => {
    setPost((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    });
  };

  const handleChange = (e) => {
    const type = e.target.type;
    if (type === "radio") {
      handleRadioChange(e);
    } else if (type === "checkbox") {
      handleCheckboxChange(e);
    } else {
      handleInputChange(e);
    }
  };

  const changeEditorData = (data) => {
    setPost((prev) => {
      return { ...prev, description: data };
    });
  };

  return (
    <div className="add-post-bg">
      <div className="add-post-container">
        <div className="add-post-container-row">
          <TextField
            label="Վերնագիր"
            variant="filled"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="add-post-container-row">
          <Editor changeData={changeEditorData} data={post.description} />
        </div>
        <div className="add-post-container-row">
          <input
            type="radio"
            id="public-post"
            name="type"
            data-visibility="public"
            onChange={handleChange}
          />
          <label htmlFor="public-post">Հրապարակային</label>
        </div>
        <div className="add-post-container-row">
          <input
            type="radio"
            id="private-post"
            name="type"
            data-visibility="private"
            onChange={handleChange}
          />
          <label htmlFor="private-post">Անձնական</label>
        </div>
        <div className="add-post-container-row">
          <input
            type="checkbox"
            id="post-draft"
            name="draft"
            onChange={handleChange}
          />
          <label htmlFor="post-draft">Սևագիր</label>
        </div>
        <div className="add-post-container-row">
          <button onClick={addPostFunction}>Հրապարակել</button>
          <button onClick={clearPostData}>Չեղարկել</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
