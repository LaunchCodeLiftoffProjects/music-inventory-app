import React from "react";

function PlayListRender(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
      </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = ["Country", "Jazz", "Keith Urban", "Rock"];

export default class Playlist extends React.Component {
  //Write HTML inside render function
  render() {
   return(
     <div>
       <div>Playlist</div>
       <PlayListRender numbers={numbers}></PlayListRender> 
           </div>
          
   );
   
  }
}
