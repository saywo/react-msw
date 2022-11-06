import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  const getUser = async () => {
    axios.get("/user").then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={getUser}>fetch</button>
      </div>
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
