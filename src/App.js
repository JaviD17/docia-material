import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Product from "./routes/Product";
import Story from "./routes/Story";
import Profile from "./routes/Profile";
import Layout from "./components/Layout";
import Contact from "./routes/Contact";
import MealPlans from "./routes/MealPlans";
import Cart from "./routes/Cart";

function App() {
  return (
    <Layout>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/story" element={<Story />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
