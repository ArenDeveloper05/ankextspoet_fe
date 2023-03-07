import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
//ROUTES
import { ROUTER } from "./router/index";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path={ROUTER.HOME_ROUTE} element={<HomePage />} />
      </Routes>
    </section>
  );
}

export default App;
