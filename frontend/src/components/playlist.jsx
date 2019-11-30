import React from 'react';
import axios from 'axios'
import Button from "@material-ui/core/Button";


export default class playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/playlist/viewplaylist')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error =>{
                console.log(error)
                this.setState({errorMsg: 'Error retreiving dara'})
            })
    }

addTracks(id){
    this.setState({errorMsg: 'Function under construction'})
}




    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                
              <h1>  Playlist </h1>
                         
                              
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>
                        {post.title} {"                               "}{""}

                        <Button variant="contained" size="small">Add</Button></div>):
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            
            </div>

        )
    }
}