import React, { useRef } from "react";
import Banner from "../../components/HomePage/Banner";
import LatestBlogs from "../../components/HomePage/LatestBlogs";
// import Member from "../../components/HomePage/Member";
import MainLayout from "../../layouts/MainLayout";
import "./index.m.css";
import { Element } from "react-scroll";
import About from "../../components/HomePage/About";
import Philosophy from "../../components/HomePage/Philosophy";
import WhyUs from "../../components/HomePage/WhyUs";
import Contact from "../../components/HomePage/Contact";
import TeamCarousel from "../../components/HomePage/Team";
import Teams from "../../components/HomePage/TrendingBLogs";

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
      <Element name="aboutSection">
        <About />
      </Element>
      <Element name="philosophySection">
        <Philosophy />
      </Element>
      <WhyUs />
      <Element name="blogsSection">
        <LatestBlogs />
      </Element>
      <Element name="contactSection">
        <Contact />
      </Element>
      <Teams />
      {/* <Member /> */}
    </MainLayout>
  );
};

export default HomePage;
