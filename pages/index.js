import Head from "next/head";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>HH Aesthetics</title>
        <meta name="description" content="Beatutiful Skin Starts here. Botox, plastic surgery and laser hair removal" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo-min.png" />
        <link rel="android-touch-icon" href="/images/logo-min.png" />
        <link rel="mask-icon" href="/images/logo-min.png" color="#5bbad5"></link>
      </Head>
      <Navbar />
      <main>
        <div className="hero" id="hero">
          <div className="overlay">
            <h1>Beautiful skin starts here</h1>
          </div>
        </div>
        <div className="gradient">
          <div className="about section" id="about">
            <About />
          </div>
          <hr />
          <div className="services section" id="services">
            <Services />
          </div>
          <div className="section" id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
