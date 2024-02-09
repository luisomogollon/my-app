import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Hero />
      <Form />
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;
