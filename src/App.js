import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <div className="App shadow mb-4 p-3 bg-body">
        <Weather defaultCity="Lisbon" />
      </div>
      <footer>
        <a href="https://github.com/Milauraaa/weather-react" tagret="_blank">
          Open-source code
        </a>
        , by Mila Yemelianenko
      </footer>
    </div>
  );
}

export default App;
