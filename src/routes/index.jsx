import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import FundPage from "../pages/FundPage";
import "./route.m.css";

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/fund" element={<FundPage />} />
    <Route path="/signin" element={<LoginPage />} />
    <Route path="/blog/:blogId" element={<BlogPage />} />
    <Route path="*" element={<PageNotFoundPage />} />
  </Routes>
);
