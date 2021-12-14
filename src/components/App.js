import React from "react";
import NavBar from "./NavBar"
import About from "./About"
import Home from "./Home"
import { image, username, city } from "../data/user";
function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city}/>
      <About image={image} />
    </div>
  );
}

export default App;
