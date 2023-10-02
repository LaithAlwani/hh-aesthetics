import Image from "next/image";

export const Banner = () => {
  return (
    <div className="banner-wrapper" id="banner">
      <div className="img-wrapper">
        <Image src={"/images/hero.jpg"} priority fill objectFit="cover" objectPosition="center" alt="hero-image"/>
      </div>
    </div>
  );
};
