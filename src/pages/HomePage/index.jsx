import React, { useRef } from "react";
import Banner from "../../components/HomePage/Banner";
import LatestBlogs from "../../components/HomePage/LatestBlogs";
import Member from "../../components/HomePage/Member";
import MainLayout from "../../layouts/MainLayout";
import "./index.m.css";
import { Element } from "react-scroll";
import About from "../../components/HomePage/About";

const HomePage = () => {
  const blogsRef = useRef(null);

  return (
    <MainLayout
      padding="position-absolute px-3 py-4"
      hide={false}
      blogsRef={blogsRef}
    >
      <div className="banner-container position-relative">
        <Banner />
      </div>
      <Element name="blogsSection">
        <LatestBlogs />
      </Element>
      <Member />
      <Element name="aboutSection">
        <About />
      </Element>
    </MainLayout>
  );
};

export default HomePage;
