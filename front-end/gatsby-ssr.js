import "./src/scss/index.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => (

  AOS.init(),
  <Layout {...props}>{element}</Layout>
);
