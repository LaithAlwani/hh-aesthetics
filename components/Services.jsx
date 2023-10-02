import Image from "next/image";

export default function Services() {
  return (
    <div className="services section" id="services">
      <h2>Services</h2>
      <div className="card">
        <div className="img-container">
          <Image src="/images/botox.jpg" alt="botox" width={100} height={100} quality={100}/>
        </div>
        <div className="card-content">
          <h3>BOTOX & DERMAL FILLERS</h3>
          <p>
            Our skilled medical professionals at Health Haven Aesthetics Clinic specialize in Botox
            and dermal filler treatments. Botox is a popular choice for minimizing the appearance of
            wrinkles and fine lines, while dermal fillers can add volume to your lips and facial
            areas, resulting in a youthful and refreshed look. We understand that each individual is
            unique, and we tailor our treatments to your specific needs, ensuring a natural and
            harmonious outcome.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h3>LASER SKIN TREATMENTS</h3>
          <p>
            Our clinic offers a wide range of laser skin treatments to address various skin
            concerns. Whether you&apos;re seeking to rejuvenate your skin&apos;s texture, reduce acne scars,
            eliminate sun damage, or even out your skin tone, our advanced laser therapies can help
            you achieve your desired results. Our team of skilled practitioners uses cutting-edge
            technology and a personalized approach to provide safe and effective treatments that
            bring out the best in your skin.
          </p>
        </div>
        <div className="img-container">
          <Image src="/images/lhr.png" alt="laser treatments" width={100} height={100} quality={100}/>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <Image src="/images/lhr2.jpeg" alt="laser hair removal" width={100} height={100} quality={100}/>
        </div>
        <div className="card-content">
          <h3>LASER HAIR REMOVAL</h3>
          <p>
            Say goodbye to unwanted hair with our laser hair removal services. At Health Haven
            Aesthetics Clinic, we use state-of-the-art laser technology to target and permanently
            reduce hair in various areas of the body. Our experienced technicians ensure your
            comfort throughout the process, and you can look forward to smooth, hair-free skin
            without the hassle of regular shaving or waxing.
          </p>
        </div>
      </div>
    </div>
  );
}
