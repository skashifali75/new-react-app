import React from 'react';
function Lunch(props){
    return (
        <div> 
          <h1> we are having  {props.dish} </h1>
          <h2> we are having {props.sdish} </h2>
        </div>
    );
}