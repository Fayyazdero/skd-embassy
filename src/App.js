import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import './App.css';

function App() {
  return (
    <div className="App">
      Test
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">about</Link>
      </nav>

      <Routes>
        <Route path="about" element={<About/>}></Route>
        <Route path="home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
