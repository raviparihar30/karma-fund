import Banner from "../../components/HomePage/Banner";
import Blogs from "../../components/HomePage/Blogs";
import LatestBlogs from "../../components/HomePage/LatestBlogs";
import Member from "../../components/HomePage/Member";
import TrendingBlogs from "../../components/HomePage/TrendingBLogs";
import MainLayout from "../../layouts/MainLayout";
import "./index.m.css";

const HomePage = () => {
  return (
    <MainLayout padding="position-absolute p-5">
      <div className="banner-container position-relative">
        <Banner />
      </div>
      <LatestBlogs />
      <TrendingBlogs />
      <Blogs />
      <Member />
    </MainLayout>
  );
};

export default HomePage;
