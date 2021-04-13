import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "demos/SaaSProductLandingPage.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "components/blogs/PopularAndRecentBlogPosts.js";
import PortfolioPage from "components/cards/TabCardGrid.js";
import CoursesPage from "components/cards/ThreeColSlider.js";

import { BrowserRouter as Router, Switch, Route, HashRouter, Link } from "react-router-dom";

export default function App() {
  
  return (
    <HashRouter basename='/'>
      <Route exact path="" component={HomePage} />
      <Route exact path="/contact-us" component={ContactUsPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
    </HashRouter>
  );
}
