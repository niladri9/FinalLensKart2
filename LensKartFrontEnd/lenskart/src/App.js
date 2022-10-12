
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import ProductByCategory from "./components/ProductByCategory";
import ProductDetail from "./components/ProductDetail";
import ProductSearch from "./components/ProductSearch";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/EditProfile";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminEdit from "./components/AdminEdit";
import AdminEditProductDetails from "./components/AdminEditProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/Cat/:cat" element={<ProductByCategory />} />
        <Route path="/product/Search/:search" element={<ProductSearch />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/AdminEdit" element={<AdminEdit />} />
        <Route
          path="/AdminEdit/ProductDetails/:id"
          element={<AdminEditProductDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
