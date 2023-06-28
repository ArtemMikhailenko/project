import React from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Contact from "./Components/contact";
import About from "./Components/about";
import Cards from "./Components/cards";
import Techology from "./Components/technology";
import Snake from "./Components/snake";
import Form from "./Components/form";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Contact></Contact>
      <About></About>
      <Cards></Cards>
      <Techology></Techology>
      <Snake></Snake>
      <Form></Form>
      </div>
     
    </div>
  );
}

export default App;
