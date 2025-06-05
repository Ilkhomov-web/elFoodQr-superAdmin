// context/AuthContext.jsx
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const UserData = [
  {
    id: 1,
    email: "test1@gmail.com",
    password: "12345",
  },
  {
    id: 2,
    email: "test2@gmail.com",
    password: "12345",
  },
];

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!validateEmail(email)) {
      alert("Iltimos, to‘g‘ri email manzil kiriting (misol: test@gmail.com)");
      return;
    }
    const user = UserData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login bo‘ldi!");
      localStorage.setItem("login", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Login topilmadi !");
    }
  };

  return (
    <AuthContext.Provider
      value={{ email, setEmail, password, setPassword, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
