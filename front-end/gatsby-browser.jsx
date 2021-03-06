import "./src/scss/index.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React from "react";
import Layout from "./src/components/Layout";

if (typeof document !== `undefined`){
  AOS.init();
}

export const wrapPageElement = ({ element, props }) => (
 
  <Layout {...props}>
    
    {element}
  </Layout>
);
