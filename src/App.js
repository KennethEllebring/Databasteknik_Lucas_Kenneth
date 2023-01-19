import {Routes, Route, BrowserRouter} from "react-router-dom";
import "./App.scss";
import Home from "./components/home";
import Register from "./components/register";
import NotFound from "./components/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
