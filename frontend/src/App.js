import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import "../src/styles/normalize.css";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import Nosotros from "./pages/nosotros";
import Galeria from "./pages/galeria";
import DondeEstamos from "./pages/dondeestamos";
import Testimonios from "./pages/Testimonios";
import Formulario from "./pages/formulario";
import Promociones from "./components/Promociones/Promociones";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/dondeestamos" element={<DondeEstamos />} />
          <Route path="/Testimonios" element={<Testimonios />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
