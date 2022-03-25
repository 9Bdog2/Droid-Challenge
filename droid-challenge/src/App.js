import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import BookListings from "./Components/BookListings.js";
import BookDetail from "./Components/BookDetail.js";
import Cart from "./Components/Cart.js";
import { useState } from "react";
import { CartProvider } from "react-use-cart";

function App() {
  const [focusedItem, setFocusedItem] = useState(false);
  const [activeBook, setActiveBook] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <CartProvider>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 jusitfy-content-center mt-5">
                      <Cart book={activeBook}/>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10  mt-5">
                      {focusedItem ? (
                        <BookDetail
                          book={activeBook}
                          setFocusedItem={setFocusedItem}
                          
                        />
                      ) : (
                        <BookListings
                          setFocusedItem={setFocusedItem}
                          setActiveBook={setActiveBook}
                        />
                      )}
                    </div>
                  </div>
                </CartProvider>
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
