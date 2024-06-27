import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Category />} />
          {/* <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/electronics" element={<Electronics />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/product:id" element={<Product />} />
          <Route />
          {/* <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
