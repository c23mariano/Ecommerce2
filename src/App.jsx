import './App.css';

import Cart from "./components/Cart"
import ItemDetailContainter from './components/ItemDetailContainer';
import ItemListContainter from './components/ItemListContainer';
import NavBar from './components/Title/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
      <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainter />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainter />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainter />} />
        </Routes>
        <ItemListContainter />
        <ItemDetailContainter />
      </BrowserRouter>

      </>
  );
}

export default App;
