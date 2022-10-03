import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Story from "./routes/Story";
import Profile from "./routes/Profile";
import Layout from "./components/Layout";
import Contact from "./routes/Contact";
import MealPlans from "./routes/MealPlans";

function App() {
  return (
    <Layout>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/story" element={<Story />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
