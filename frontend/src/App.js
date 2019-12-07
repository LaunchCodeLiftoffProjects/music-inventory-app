import React from 'react'
import './App.css'
import { Routes } from './Router'
import PostForm from './components/PostForm'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <PostForm />
            </div>
        )
    }
}


