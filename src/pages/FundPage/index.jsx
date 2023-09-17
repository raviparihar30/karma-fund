import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./FundPage.m.css";
import FundComponent from "../../components/HomePage/FundComponent/Fund";

const FundPage = () => {
  return (
    <MainLayout padding="position-absolute px-3 py-4" hide={false}>
      <div className="banner-container position-relative">
        <FundComponent />
      </div>
    </MainLayout>
  );
};

export default FundPage;
