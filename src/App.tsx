import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="Home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/About/"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
