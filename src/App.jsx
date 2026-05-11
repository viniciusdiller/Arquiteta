import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Midia from "./components/Midia";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Midia />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}
