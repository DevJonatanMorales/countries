import { Route, Routes } from "react-router";
import "./assets/styles/styles.scss";
import { HomePage } from "./page/homePage";
import { NotFound } from "./page/NotFound";
import { Country } from "./page/country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pais" element={<Country />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
