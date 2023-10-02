import Head from "next/head";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Banner } from "../components/Banner";
import { Toaster } from "react-hot-toast";


export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>HH Aesthetics</title>
        <meta
          name="description"
          content="Beatutiful Skin Starts at Health Haven. Botox, plastic surgery and laser hair removal"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo-min.png" />
        <link rel="android-touch-icon" href="/images/logo-min.png" />
        <link rel="mask-icon" href="/images/logo-min.png" color="#5bbad5"></link>
      </Head>
      <Toaster />
      <Navbar />
      <Banner />
      <main>
      <h1><em>Beauty start at Health Haven</em></h1>
        <About />
        <hr />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
