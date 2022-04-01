import React from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="app">
      <Profile />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
//lol
export default App;
