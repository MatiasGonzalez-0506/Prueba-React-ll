import { BrowserRouter, Routes, Route } from "react-router-dom"
import PizzaProvider from "./context/PizzasProvider";
import DetailsPizza from "./views/DetailsPizza";

import Navbar from './components/NavBar'
import Home from "./views/Home";
import ShoppingCart from "./views/ShoppingCart"
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <PizzaProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DetailsPizza />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      </PizzaProvider>
    </div>
  );
}

export default App;