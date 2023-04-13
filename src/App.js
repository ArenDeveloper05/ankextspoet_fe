import "./App.css";
import { Routes, Route } from "react-router-dom";
//ROUTES
import { ROUTER } from "./router/index";
//PAGES
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./router/ProtectedRoute";
import { getFromLocalStorage } from "./api/api";
import AccountPage from "./pages/AccountPage";

function App() {
  const isAuth = getFromLocalStorage("isAuth") == "true" ? true : false;
  return (
    <section className="app">
      <Routes>
        <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
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
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </section>
  );
}

export default App;
