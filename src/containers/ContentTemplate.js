import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeight from "../Reusables/PageHeight";

const ContentTemplate = ({ projectRef }) => {
  const [pageHeight] = PageHeight();

  return (
    <div
      className="content-page"
      style={{ minHeight: pageHeight ? "200vh" : "unset" }}
    >
      <Header projectRef={projectRef} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default ContentTemplate;
