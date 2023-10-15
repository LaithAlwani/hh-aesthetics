import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (value) => {
    console.log(value, isOpen)
    if (value === "home" && isOpen) return setIsOpen(false);
    if(value != "home") return setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <a href="#app" className="logo-container" onClick={()=>toggleMenu('home')}>
          <Image src="/images/logo.webp" alt="logo" className="logo" width={125} height={50} />
        </a>
        <div className="links">
          <NavLinks />
        </div>
        <div className="mobile-nav">
          <span onClick={toggleMenu}>
            <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          </span>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "mobile-nav-links open-nav" : "mobile-nav-links"}>
        <NavLinks />
      </div>
    </nav>
  );
}
const NavLinks = () => {
  const router = useRouter();
  const hash = router.asPath;
  const [path, setPath] = useState(hash || null);

  return (
    <>
      <a
        href="#about"
        className={path === "about" ? "active" : ""}
        onClick={() => setPath("about")}>
        About
      </a>
      <a
        href="#services"
        className={path === "services" ? "active" : ""}
        onClick={() => setPath("services")}>
        Services
      </a>
      <a
        href="#contact"
        className={path === "contact" ? "active" : ""}
        onClick={() => setPath("contact")}>
        Contact
      </a>
    </>
  );
};

const MenuButton = ({ isOpen,toggleMenu }) => {
  return (
    <div onClick={toggleMenu} className={isOpen ? "menu-btn open" : "menu-btn"}>
      <div className="menu-btn-icon"></div>
    </div>
  );
};
