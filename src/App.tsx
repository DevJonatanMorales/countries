import { Route, Routes } from "react-router";
import "./assets/styles/styles.scss";
import { HomePage } from "./page/homePage";
import { NotFound } from "./page/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pais" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
