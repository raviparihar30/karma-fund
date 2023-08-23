import React from "react";
import Banner from "../../components/HomePage/Banner";
import LatestBlogs from "../../components/HomePage/LatestBlogs";
import Member from "../../components/HomePage/Member";
import MainLayout from "../../layouts/MainLayout";
import "./index.m.css";

const HomePage = () => {
  return (
    <MainLayout padding="position-absolute px-3 py-4" hide={false}>
      <div className="banner-container position-relative">
        <Banner />
      </div>
      <LatestBlogs />
      <Member />
    </MainLayout>
  );
};

export default HomePage;
