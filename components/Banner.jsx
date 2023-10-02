import Image from "next/image";

export const Banner = () => {
  return (
    <div className="banner" id="banner">
      <div className="banner-wrapper">
        <hgroup>
          <h1>Health Haven Aesthetics</h1>
          <p>Beautiful Skin Starts Here</p>
          <a href="#contact">{`Request a booking >`}</a>
        </hgroup>
      </div>
    </div>
  );
};
