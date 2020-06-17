import React from 'react';
import './App.css';
import Lunch from './khana.js';

function App() {
  return (
    <div>
     <Lunch  sdish="labe shireen" dish="pullao"/>
     <hr/>
     <Lunch sdish="Locky ka Halwa" dish="Beef Biryani"/>
     <hr/>
     <Lunch sdish="Coktail" dish="Qourma"/>  
    </div>
  );
}

export default App;
