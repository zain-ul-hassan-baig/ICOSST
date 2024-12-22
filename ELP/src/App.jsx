import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import Schedule from "./components/Schedule";
import Tickets from "./components/Tickets";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="mt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <EventDetails />
        </section>
        <section id="services">
        <CountdownTimer />
        </section>

        <section id="services">
          <Schedule />
        </section>
        

        <section id="contact">
          <Tickets />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
