import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTrack from "./pages/addTrack";
import Playlist from "./pages/page1";
import Track from "./pages/page2";
import Search from "./pages/page3";
import Share from "./pages/page4";

import Layout from "./Layout";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={AddTrack} />
          <Route path="/page1" exact component={Playlist} />
          <Route path="/page2" exact component={Track} />
          <Route path="/page3" exact component={Search} />
          <Route path="/page4" exact component={Share} />
        </div>
      </Layout>
    </Router>
  );
};
