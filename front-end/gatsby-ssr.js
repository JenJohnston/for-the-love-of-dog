import "./src/scss/index.scss";
import AOS, { init } from 'aos';
import 'aos/dist/aos.css'; 
import React, {useEffect} from "react";
import Layout from "./src/components/Layout";

if (typeof document !== `undefined`){
  
}

export const wrapPageElement = ({ element, props }) => (

  
  <Layout {...props}>
    {element}
  </Layout>
);
