import React from "react";
//import "./App.css";
import "./Components/Style.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Main/AllRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
   </div>
  );
}

export default App;
