import React, { component } from 'react';
import axios from "axios";

export default class PostForm extends React.Component {
    state = { 
        Title: ""
    };
    
    changeHandler = e => {
        this.setState({ Title: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault()

        const playist = {
            Title: this.state.Title
        };
        
        axios.post('http://localhost:8080/playlist/new/', playist).then(res => {
            console.log(res);
            console.log(res.data)
        });
    };

    render() {
        return (
            <div>
            <form onSubmit={this.submitHandler}>
            <div>
            <input type="text" name="Playlist_id" value={Playlist_id} onChange={this.changeHandler}/>
            </div>
            <div>
            <input type="text" name="Title" value={Title} onChange={this.changeHandler} />
            </div>
            </form>

            </div>
        );
        
    }

}

