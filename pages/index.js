import Head from "next/head";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Toaster } from "react-hot-toast";
import { WhyChoose } from "../components/WhyChoose";

export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>Health Haven Aesthetics</title>
        <meta
          name="description"
          content="Beautiful Skin Starts at Health Haven. Botox Dermal fillers, 
          laser skin treatment and laser hair removal, 
          with over 15 years of experience, we are passionately committed to helping you achieve your beauty and wellness goals"
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
        <h1>
          <em>Beauty start at Health Haven</em>
        </h1>
        <About />
        <hr />
        <Services />
        <WhyChoose />
        <Contact />
      </main>
      <footer>
        <span>Health Haven Asthetics &copy; 2022</span>
      </footer>
    </div>
  );
}
