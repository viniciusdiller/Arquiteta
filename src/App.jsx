import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Midia from "./components/Midia";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Cursor />
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
