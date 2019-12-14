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
<<<<<<< HEAD
                this.setState({errorMsg: 'Error retreiving data'})
=======
                this.setState({errorMsg: 'Error retreiving dara'})
>>>>>>> 97948fa9afbbdfeae7bc619ffeed0d555c934a47
            })
    }

addTracks(id){
    this.setState({errorMsg: 'Function under construction'})
}
<<<<<<< HEAD
    
=======

>>>>>>> 97948fa9afbbdfeae7bc619ffeed0d555c934a47



    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                
              <h1>  Playlist </h1>
                         
                              
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>
<<<<<<< HEAD
                        {post.title} 

                        <a size="2" href={'/addtrackstoplaylist/' + post.id}>

Click to add tracks to this playlist

</a>
                        
                        </div>):
=======
                        {post.title} {"                               "}{""}

                        <Button variant="contained" size="small">Add</Button></div>):
>>>>>>> 97948fa9afbbdfeae7bc619ffeed0d555c934a47
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            
            </div>

        )
    }
}