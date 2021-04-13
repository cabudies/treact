import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "demos/SaaSProductLandingPage.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "components/blogs/PopularAndRecentBlogPosts.js";
import PortfolioPage from "components/cards/TabCardGrid.js";
import CoursesPage from "components/cards/ThreeColSlider.js";

import { Route, HashRouter, withRouter, Switch } from "react-router-dom";

export default function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
    </div>
  );
}
