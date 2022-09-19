import { useState } from "react";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <nav>
      <div className="nav-container">
        <a href="#app" className="logo-container" onClick={()=>setIsOpen(!open)}>
          <img src="/images/logo.png" alt="logo" className="logo" />
          <em>Aesthetics</em>
        </a>

        <div className="links">
          <NavLinks />
        </div>
        <div className="mobile-nav">
          <span onClick={toggleMenu}>
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </span>
        </div>
      </div>
      <div onClick={()=>setIsOpen(!isOpen)} className={isOpen ? "mobile-nav-links open-nav" : "mobile-nav-links"}>
        <NavLinks />
      </div>
    </nav>
  );
}
