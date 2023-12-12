// Router.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../views/Home';
import Layout from "./Layout";
import Error404 from "../views/404Error";
import ContactUs from "../views/ContactUs";
import AboutUs from "../views/AboutUs";
import PortFolio from "../views/PortFolio";
import LeaderShip from "../views/LeaderShip";
import Technology from "../views/Technology";
import WebService from "../views/WebService";
import AndService from "../views/AndService";
import SoftService from "../views/SoftService";
import CloudService from "../views/Cloud";

const RouterComponent = () => {
  return (
    <Router>
    <Routes>
    <Route element={<Layout/>}>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/about-us" element={<AboutUs/>} />
        <Route exact path="/portfolio" element={<PortFolio/>} />
        <Route exact path="/our-leadership" element={<LeaderShip/>} />
        <Route exact path="/our-technology" element={<Technology/>} />
        <Route exact path="/web-development" element={<WebService/>} />
        <Route exact path="/android-development" element={<AndService/>} />
        <Route exact path="/soft-development" element={<SoftService/>} />
        <Route exact path="/cloud-solution" element={<CloudService/>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
    </Router>
  );
};

export default RouterComponent;
