import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { BASE_PATH } from "./constants";
import { HomePage } from "./layout/home/home";

function App() {
  return (
    <Router basename={BASE_PATH}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
