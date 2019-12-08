import React from "react";

import axios from "axios";



export default class PostList extends React.Component {

    state = {

        playlist: []

    };



    componentDidMount() {

        axios.get("http://localhost:8080/playlist").then(res => {

            console.log(res);

            this.ListeningStateChangedEvent({ playlists: res.data });

        });

    }



    render() {

        return (

            <ul>

                {this.state.playlists.map(playlist =>(

                    <li> key={playlist.id}>{playlist.Title}</li>

                ))}

            </ul>

        );

    }

}
