import { useEffect, useState } from "react";
import { addPost } from "../../api/api";
import { TextField } from "@mui/material";
import { notifyError, notifySuccess } from "../../utils/toast/toast";
import { ToastContainer } from "react-toastify";
import { ROUTER } from "../../router";
import { useNavigate } from "react-router-dom";

import Editor from "../editor/Editor";

import "./AddPost.scss";

const AddPost = () => {
  const navigate = useNavigate();
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
        notifySuccess("Հրապարակումը տեղի ունեցավ։");
        setTimeout(() => {
          navigate(ROUTER.HOME_ROUTE);
        }, 3000);
      } catch (err) {
        console.log(err);
        notifyError("Սխալ տեղի ունեցավ։");
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
        <h1>Ավելացրեք նոր հրապարակում</h1>
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
      <ToastContainer />
    </div>
  );
};

export default AddPost;
