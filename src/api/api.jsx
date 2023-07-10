import axios from "axios";
// const APIURL = "/oauth/token";
const APIURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: APIURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Local Storage
export const changeInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// POST
export const login = async (loginData) => {
  const defaultLoginObject = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_GRAND_TYPE,
    scope: process.env.REACT_APP_SCOPE,
  };
  return await api.post("/oauth/token", {
    ...defaultLoginObject,
    ...loginData,
  });
};
export const register = async (registerData) => {
  return await api.post("/api/user", registerData);
};
export const addPost = async (postData) => {
  const obj = {
    ...postData,
    draft: postData.draft + "",
    user_id: JSON.parse(getFromLocalStorage("userData")).id,
  };
  return await api.post("/api/post", obj);
};

export const addComment = async (postID, userInfo) => {
  return await api.post(`/api/comment/${postID}`, userInfo);
};

export const addLike = async (postID, userInfo) => {
  return await api.post(`/api/like/${postID}`, userInfo);
};
//GET
export const getUserData = async (token) => {
  return await api.get("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUserPosts = async (token) => {
  return await api.get("/api/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPosts = async (token, currentPage) => {
  console.log(token);
  return await api.get(`/api/all-posts?page=${currentPage}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//DELETE
export const deletePost = async (token, id) => {
  return await api.delete(`/api/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteLike = async (id) => {
  return await api.delete(`/api/like/${id}`);
};

export const deleteComment = async (id) => {
  return await api.delete(`/api/comment/${id}`);
};
//PUT
export const editPost = async (postData) => {
  console.log(postData, "edit");
  return await api.put(`/api/post/`, postData);
};

// api/user post  http://localhost:8000/api/user
// request        http://localhost:8000/oauth/token  => token a talis(localstorage save)
// miangamic request http://localhost:8000/api/user => talisa datan useri masin =>
//localstorage
