import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

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
          }></Route>

        <Route
          path="/About/"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }></Route>
        <Route
          path="/Services"
          element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          }></Route>
        <Route
          path="/Contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
