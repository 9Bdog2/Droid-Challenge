import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import BookListings from "./Components/BookListings.js";

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
                <div className="container">
                  <div className="row">
                    <div className="col-md-1 col-sm-1 col-lg-1 col-xl-1 ">
                      Left side
                    </div>
                    <div className="col-md-11 col-sm-11 col-lg-11 col-xl-11  ">
                      <BookListings />
                    </div>
                  </div>
                </div>
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
