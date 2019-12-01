import React from "react";


export default class Track extends React.Component {
  render() {
  return (
    <div>
    <h1 color="white"> Create Playlist </h1>
    
      <form>
        <table>
          <tbody>
          <tr>
            <td>
              Name for new Playlist:<br/>
                <input type="text" name="playlist"/><br/>
            </td>    
          </tr>  
          </tbody>
        </table>
        <table> Tracks:</table>
        <input type= "submit"/>
      </form>
      </div>
  );
}
}