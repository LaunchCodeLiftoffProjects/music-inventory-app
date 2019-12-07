import React, { component } from 'react';
import axios from "axios";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            Playlist_id: '',
            Title: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/playlist/new/', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })


    };

    render() {
        const { Playlist_id, Title } = this.state
        return (
            <div>
            <form onSubmit={this.submitHandler}>
            <div>
            <input type="text" name="Playlist_id" value={Playlist_id} onChange={this.changeHandler}/>
            </div>
            <div>
            <input type="text" name="Title" value={Title} onChange={this.changeHandler} />
            </div>
            <button type="submit">Submit</button>
            </form>

            </div>
        );
        
    }

}

