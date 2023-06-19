import axios from "axios";
// const APIURL = "/oauth/token";
const APIURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: APIURL,
  headers: {
    "Content-Type": "application/json",
  },
});

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

// api/user post  http://localhost:8000/api/user
// request        http://localhost:8000/oauth/token  => token a talis(localstorage save)
// miangamic request http://localhost:8000/api/user => talisa datan useri masin =>
//localstorage
