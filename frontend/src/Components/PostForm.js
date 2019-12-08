import React from "react";

import axios from "axios";



export default class PostForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {        title: "",        errorMsg: "Intial err"         }
        }
    
      handleChange = e => {
        this.setState({ title: e.target.value });
      };

      
      handleSubmit = e => {
        e.preventDefault();
        window.location = "http://localhost:3000/page1";
        const playlist = {
            id: null,
            title: this.state.title
            };
        
        axios.post( "http://localhost:8080/playlist/new", playlist ).then(res => {
            console.log(res);
            console.log(res.data);
             })
            .catch(error =>{
                console.log(error)
                
            })
          };
             
        
    
     






    render() {

      
        //const { title, errorMsg } = this.state
        

        return (

          

            <form onSubmit={this.handleSubmit}>

           
                <label>
                    Playlist Toitle :                    

                      

            <input type="text" maxlength="11" name="title"  onChange={this.handleChange} />
            </label>


            <button type="submit">Submit</button>
            
            </form>

            

            

        );

        

    }



}