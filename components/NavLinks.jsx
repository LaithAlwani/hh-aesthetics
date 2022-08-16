import { useState } from "react";
import { useRouter } from "next/router";
export default function NavLinks() {
  const router = useRouter()
  const hash = router.asPath;
  const [path, setPath] = useState(hash || null);
  return (
    <>
      <a
        href="#about"
        className={path === "about" ? "active" : ""}
        onClick={() => setPath("about")}
      >
        About
      </a>
      <a
        href="#services"
        className={path === "services" ? "active" : ""}
        onClick={() => setPath("services")}
      >
        Services
      </a>
      <a
        href="#contact"
        className={path === "contact" ? "active" : ""}
        onClick={() => setPath("contact")}
      >
        Contact
      </a>
    </>
  );
}
