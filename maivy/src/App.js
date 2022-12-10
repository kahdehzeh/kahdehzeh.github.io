import './App.css';
import { useEffect, useState } from 'react';
import { Timer } from "./components/timer";

function App() {
  const [visibility, setVisibility] = useState("hidden")

  return (
    <div className="App">
      <header className="App-header">
        <h1> How many days until baby is back? </h1>
        <button onClick={() => setVisibility(visibility === "hidden" ? "visible" : "hidden")}> Check </button>
      </header>
      <body style={{ visibility: `${visibility}` }}>
        
          {Timer()}
        
      </body>

    </div>
  );
}

export default App;
