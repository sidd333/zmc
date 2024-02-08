import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/home";
import { AddRes } from "./pages/addRes/res";
import Register from "./pages/register/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addRes" element={<AddRes />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
