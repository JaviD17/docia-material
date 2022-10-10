import { Routes, Route, Navigate } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Product from "./routes/Product";
import Story from "./routes/Story";
import Profile from "./routes/Profile";
import Layout from "./components/Layout";
import Contact from "./routes/Contact";
import FAQ from "./routes/FAQ";
import MealPlans from "./routes/MealPlans";
import Cart from "./routes/Cart";
import Account from "./routes/Account";
import DashboardPage from "./routes/DashboardPage";
import SignUpPage from "./routes/SignUpPage";
import LoginPage from "./routes/LoginPage";
// import { auth } from "./firebase/config";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <Layout>
      {authIsReady && (
        <>
          <ResponsiveAppBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Product />} />
            <Route path="/story" element={<Story />} />
            <Route path="/mealplans" element={<MealPlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/account"
              element={user ? <Account /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile/dashboard"
              element={user ? <DashboardPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/cart"
              element={user ? <Cart /> : <Navigate to="/login" />}
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </>
      )}
    </Layout>
  );
}

export default App;
