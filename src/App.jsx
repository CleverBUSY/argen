import React from "react";
import Home from "./components/Home/Hame";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Contact from "./page/ContactPage/Contact";
import About from "./page/AboutPage/About";
import Blog from "./page/Blog/Blog"
import Recipes from "./page/Recipes/Recipes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/recipes" element={<Recipes/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
