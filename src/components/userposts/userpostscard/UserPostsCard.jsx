import { useState } from "react";
import { useEffect } from "react";
import { deletePost, editPost, getFromLocalStorage } from "../../../api/api";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { LoadingButton } from "@mui/lab";

import parse from "html-react-parser";
import Editor from "../../editor/Editor";

const UserPostsCard = ({ post, id, getData }) => {
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState("");
  const [loading, setLoading] = useState(false);

  const changeData = (data) => {
    setEditData(data);
  };

  async function removePost(id) {
    try {
      setLoading(true);
      await deletePost(getFromLocalStorage("accessToken"), id);
      getData();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function editPostFunction(id) {
    try {
      setLoading(true);
      await editPost({
        ...post,
        description: editData,
      });
      getData();
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log({
      ...post,
      description: editData,
    });
  }, [editData]);

  return (
    <div className="user-posts-container-cards-card">
      <div className="user-posts-container-cards-card-title">
        <h1>{post.title}</h1>
      </div>
      <div className="user-posts-container-cards-card-description">
        {edit ? (
          <Editor data={post.description} changeData={changeData} />
        ) : (
          parse(post.description)
        )}
        <br />
        <br />
        <p>{post.created_at}</p>
      </div>
      <div className="user-posts-container-cards-card-buttons">
        <LoadingButton
          startIcon={<AiFillEdit />}
          variant="outlined"
          loading={loading}
          onClick={() => {
            setEdit((prev) => !prev);
            if (edit) {
              if (editData !== post.description) {
                editPostFunction(id);
              }
            }
          }}
        >
          {edit ? "Save" : "Edit"}
        </LoadingButton>

        <LoadingButton
          startIcon={<AiFillDelete />}
          variant="outlined"
          color="error"
          loading={loading}
          onClick={() => {
            removePost(id);
          }}
        >
          Delete
        </LoadingButton>
      </div>
    </div>
  );
};

export default UserPostsCard;
