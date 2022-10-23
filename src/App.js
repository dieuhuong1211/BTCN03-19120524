import './App.css';
import { useEffect } from "react";

import Meme from "./Components/Meme";

function App() {
  useEffect(() => {
    document.title = "MEMELIST-19120524"
  }, [])

  return (
    <div className="App">
      <Meme />
    </div>
  );
}

export default App;
