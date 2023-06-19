import { useEffect, useState } from "react";
import "./AddPost.scss";
import { addPost } from "../../api/api";
import Editor from "../editor/Editor";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    type: "public",
    draft: false,
  });

  const addNewPost = async () => {
    try {
      await addPost(post);
      console.log("gnac");
    } catch (err) {
      console.log(err);
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
    if (type == "radio") {
      handleRadioChange(e);
    } else if (type == "checkbox") {
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
    <div className="add-post">
      <div className="add-post-container">
        <div className="add-post-container-row">
          <input
            type="text"
            id="post-title"
            value={post.title}
            name="title"
            onChange={handleChange}
          />
          <label htmlFor="post-title">Վերնագիր</label>
        </div>
        <div className="add-post-container-row">
          <Editor changeData={changeEditorData} />
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
          <button onClick={addNewPost}>Հրապարակել</button>
          <button>Չեղարկել</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
