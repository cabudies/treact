import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "demos/SaaSProductLandingPage.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "components/blogs/PopularAndRecentBlogPosts.js";
import PortfolioPage from "components/cards/TabCardGrid.js";
import CoursesPage from "components/cards/ThreeColSlider.js";

import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";

export default function App() {
  
    return (
    // <Router>
      // <Switch>
      //   <Route path="/blog">
      //     <BlogIndexPage />
      //   </Route>
      //   <Route path="/portfolio">
      //     <PortfolioPage />
      //   </Route>
      //   <Route path="/courses">
      //     <CoursesPage />
      //   </Route>
      //   <Route path="/contact-us">
      //     <ContactUsPage />
      //   </Route>
      //   <Route path="/">
      //     <HomePage />
      //   </Route>
      // </Switch>
    // </Router>
    <HashRouter basename='/'>
      <Switch>
        <Route path="/blog">
          <BlogIndexPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/courses">
          <CoursesPage />
        </Route>
        <Route path="/contact-us">
          <ContactUsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
