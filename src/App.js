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
      {/* <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact-us">ContactUsPage</Link></li>
        <li><Link to="/portfolio">PortfolioPage</Link></li>
        </ul>
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </div> */}
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact-us" component={ContactUsPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        {/* <Route exact path="/portfolio" component={NotFound} /> */}
      {/* </Switch> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact-us" component={ContactUsPage} />
      <Route exact path="/portfolio" component={PortfolioPage} />
    </HashRouter>
  );
}
