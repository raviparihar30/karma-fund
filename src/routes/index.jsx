import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/signin" element={<LoginPage />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </Routes>
);
