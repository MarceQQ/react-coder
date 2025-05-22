import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './context/CartContext';
import HeroTitle from './components/HeroTitle';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import NotFound from './components/NotFound';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <HeroTitle />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/nivel/:nivel' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;