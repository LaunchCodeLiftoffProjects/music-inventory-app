import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'

export const NavBar = ({ color }) => (
    <AppBar color={color}>
        <Toolbar>
            <Link to="/page1">
                <Button>Playlist</Button>
            </Link>
            <Link to="/page2">
                <Button>Track</Button>
            </Link>
            <Link to="/page3">
                <Button>Search</Button>
            </Link>
            <Link to="/page4">
                <Button>Genre</Button>
            </Link>
            <Link to="/page5">
                <Button>Favorite</Button>
             </Link>
             <Link to="/page6">
                <Button>Share</Button>
             </Link>
        </Toolbar>
    </AppBar>
)