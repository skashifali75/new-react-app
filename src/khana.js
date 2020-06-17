import React from 'react';
// import App from "./App.js";
function Lunch(props){
    return (
        <div class="container-fluid"> 
          <h1 class="bg-primary"> we are having  {props.dish} as main dish</h1>
          <h2 class="bg-dark text-light "> we are having {props.sdish} as sweet dish </h2>
          
        </div>
    );
}
export default Lunch;