import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./context/AuthContext";
import RestaurantDetails from "./pages/RestaurantDetails";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/restaurant-details" element={<RestaurantDetails />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
