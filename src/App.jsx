import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./router/router";
import { getFromLocalStorage } from "./api/api";

//PAGES
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./router/ProtectedRoute";
import AccountPage from "./pages/AccountPage";
import AddPostPage from "./pages/AddPostPage";
import UserPostsPage from "./pages/UserPostsPage";
import ExercisePage from "./pages/ExercisePage";
import SingleUserPage from "./pages/SingleUserPage";
import AboutPage from "./pages/AboutPage";

import "./App.css";

function App() {
  const isAuth = getFromLocalStorage("isAuth") === "true" ? true : false;
  return (
    <section className="app">
      <Routes>
        <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
        <Route
          path={ROUTER.LOGIN_ROUTE}
          element={
            <ProtectedRoute isAuth={isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTER.REGISTER_ROUTE}
          element={
            <ProtectedRoute isAuth={isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTER.ACCOUNT_ROUTE}
          element={
            <ProtectedRoute isAuth={!isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <AccountPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTER.ADD_POST_ROUTE}
          element={
            <ProtectedRoute isAuth={!isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <AddPostPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTER.MY_POSTS_ROUTE}
          element={
            <ProtectedRoute isAuth={!isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <UserPostsPage />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTER.EXERCISE_PAGE_ROUTE} element={<ExercisePage />} />
        <Route
          path={ROUTER.SINGLE_USER_PAGE_ROUTE}
          element={
            <ProtectedRoute isAuth={!isAuth} redirectPath={ROUTER.HOME_ROUTE}>
              <SingleUserPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </section>
  );
}

export default App;
