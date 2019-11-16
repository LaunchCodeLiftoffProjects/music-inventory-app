import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Playlist from './pages/page1'
import Track from './pages/page2'
import Search from './pages/page3'
import Genre from './pages/page4'
import Favorite from './pages/page5'
import Share from './pages/page6'
import Layout from './Layout'

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: '100px' }}>
          <Route path="/page1" exact component={Playlist} />
          <Route path="/page2" exact component={Track} />
          <Route path="/page3" exact component={Search} />
          <Route path="/page4" exact component={Genre} />
          <Route path="/page5" exact component={Favorite} />
          <Route path="/page6" exact component={Share} />
        
        </div>

      </Layout>
    </Router>
  )
}