import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar"; // <-- Import Navbar
import "./assets/styles/main.scss";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
