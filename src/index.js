import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, HashRouter, withRouter  } from "react-router-dom";
import HomePage from "demos/SaaSProductLandingPage.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "components/blogs/PopularAndRecentBlogPosts.js";
import PortfolioPage from "components/cards/TabCardGrid.js";
import CoursesPage from "components/cards/ThreeColSlider.js";

Modal.setAppElement("#root");

ReactDOM.render(
  <HashRouter basename='/#'>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
