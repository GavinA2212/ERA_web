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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }></Route>

        <Route
          path="/About/"
          element={
            <>
              <About />
            </>
          }></Route>
        <Route
          path="/Services"
          element={
            <>
              <Services />
            </>
          }></Route>
        <Route
          path="/Contact"
          element={
            <>
              <Contact />
            </>
          }></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
