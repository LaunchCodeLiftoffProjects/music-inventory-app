import React from 'react'
import './App.css'
import { Routes } from './Router'
import PostForm from './components/PostForm'

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostForm />
            </div>
        )
    }
}

export default App
