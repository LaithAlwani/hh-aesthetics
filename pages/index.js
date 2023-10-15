import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const Navbar = dynamic(() => import('../components/Navbar'));
const About = dynamic(()=> import('../components/About'));
const Services = dynamic(() => import('../components/Services'));
const WhyChoose = dynamic(()=> import('../components/WhyChoose'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  return (
    <div id="app">
      <Head>
        <title>Health Haven Esthetics - Beautiful Skin Starts Here!</title>
        <meta
          name="description"
          content="Beautiful Skin Starts at Health Haven. Botox Dermal fillers, 
          laser skin treatment and laser hair removal, committed to 
          helping our clients achieve beauty and wellness goals."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/images/logo-min.png" />
        <link rel="android-touch-icon" href="/images/logo-min.png" />
        <link rel="mask-icon" href="/images/logo-min.png" color="#5bbad5"></link>
      </Head>
      <Toaster />
      <Navbar />
      <div className="banner-wrapper" id="banner">
      <div className="img-wrapper">
        <Image src={"/images/hero.webp"} priority fill objectFit="cover" objectPosition="center" alt="hero-image"/>
      </div>
    </div>
      <main>
        <h1>
          <em>Beauty start at Health Haven</em>
        </h1>
        <About />
        <hr />
        <Services />
        <WhyChoose />
        <hr />
        <Contact />
      </main>
      <footer>
        <span>Health Haven Asthetics &copy; 2022</span>
      </footer>
    </div>
  );
}
