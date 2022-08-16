import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/hero";
import About from "../components/about";
import Services from "../components/Services";
import Contact from "../components/contact";


export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>HH Aesthetics</title>
        <meta name="description" content="Botox, plastic surgery and laser hair removal" />
        <link rel="icon" href="/ico-tpbg.png" />
      </Head>
      <Layout>
        <div className="hero" id="hero">
          <Hero />
        </div>
        <div className="about section" id="about">
          <About />
        </div>
        <div className="services section" id="services">
          <Services />
        </div>
        <div className="section" id="contact">
          <Contact />
        </div>
      </Layout>
    </div>
  );
}
