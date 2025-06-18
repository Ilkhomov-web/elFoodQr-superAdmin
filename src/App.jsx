import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./context/AuthContext";
import RestaurantDetails from "./pages/RestaurantDetails";
import CreateRestaurant from "./pages/CreateRestaurant";
import RestaurantListPage from "./pages/RestaurantListPage";
import PaymentInfoPage from "./pages/PaymentInfoPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/restaurant-details" element={<RestaurantDetails />} />
        <Route path="/create-restaurant" element={<CreateRestaurant />} />
        <Route path="/restaurant-list" element={<RestaurantListPage />} />
        <Route path="/payment-info" element={<PaymentInfoPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
