import { useCallback } from "react";
import { useState } from "react";
import { addComment, getFromLocalStorage } from "../../../../api/api";
import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";

const PostCardAddComment = ({
  id,
  getAllPostsFunction,
  setOpenComments,
  setOpenAddComent,
}) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const addCommentFunction = useCallback(async () => {
    try {
      setLoading(true);
      await addComment(id, {
        description: value,
        user_id: JSON.parse(getFromLocalStorage("userData")).id,
      });
      await getAllPostsFunction();
      setValue("");
      setOpenComments(true);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  }, [value, getAllPostsFunction, id, setOpenComments]);

  return (
    <div className="home-content-posts-post-addcomment">
      <TextField
        label="Ձեր մեկնաբանությունը"
        variant="filled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <LoadingButton
        loading={loading}
        variant="outlined"
        onClick={() => {
          if (value.trim()) {
            addCommentFunction();
          }
        }}
      >
        Մեկնաբանել
      </LoadingButton>
      <Button
        variant="text"
        color="secondary"
        className="home-content-posts-post-addcomment-cancel"
        style={{ marginLeft: "auto" }}
        onClick={() => {
          setOpenAddComent(false);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default PostCardAddComment;
