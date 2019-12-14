import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AddTrack from "./pages/addTrack";
import Playlist from "./pages/page1";
import playlist from "./components/playlist";
import Track from "./pages/page2";
import Search from "./pages/page3";
import Share from "./pages/page4";
import AddGenre from "./pages/addGenre";
import AddArtist from "./pages/addArtist";
import addplaylist from "./pages/addplaylist";
import AddTrackPlaylist from "./pages/addtrackstoplaylist";

import Layout from "./Layout";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/page1" exact component={playlist} />
          <Route path="/page2" exact component={Track} />
          <Route path="/addTrack" exact component={AddTrack} />
          <Route path="/page3" exact component={Search} />
          <Route path="/page4" exact component={Share} />
          <Route path="/addGenre" exact component={AddGenre} />
          <Route path="/addArtist" extact component={AddArtist} />
          <Route path="/addplaylist" extact component={addplaylist} />
          <Route
            path="/addtrackstoplaylist"
            extact
            component={AddTrackPlaylist}
          />
        </div>
      </Layout>
    </Router>
  );
};
