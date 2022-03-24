import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Home />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Home />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
