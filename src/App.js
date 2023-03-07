import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
//ROUTES
import { ROUTER } from "./router/index";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
        <Route path={ROUTER.LOGIN_ROUTE} element={<LoginPage />} />
      </Routes>
    </section>
  );
}

export default App;
