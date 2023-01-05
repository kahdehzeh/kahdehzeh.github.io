import './App.css';
import { useEffect, useState, useRef } from 'react';
import { Timer } from "./components/timer";

function App() {
  const [visibility, setVisibility] = useState("hidden")



  const clickHandler = () => {
    visibility === "hidden" ? setVisibility("visible") : setVisibility("hidden") }

 
    

  return (
    <div className="App">
      <header className="App-header">
        <h1> How many days until baby is back? </h1>
        <img src='https://i.imgur.com/75KcV1y.png' alt="egghead" onClick={() => clickHandler()} id="img"></img>
      </header>
      <body style={{ visibility: `${visibility}` }}>

        {Timer()}
        <div>

        </div>
      </body>
      <footer id='footer'>
        <img src="https://i.imgur.com/TOvrK6s.png" alt="egghead2" id="img2" width={"100px"} style={{ visibility: `${visibility}` }} onClick={() => clickHandler()}></img>
      </footer>

    </div>
  );
}

export default App;
