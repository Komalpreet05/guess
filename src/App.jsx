import { useState } from "react";
// import { WelcomePage } from "./components/WelcomePage";
import WelcomePage from "./components/WelcomepPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WelcomePage />
    </div>
  );
}

export default App;
