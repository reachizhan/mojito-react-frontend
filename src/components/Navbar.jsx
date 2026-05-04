import React, { useState, useEffect } from "react";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-black/50" : "bg-transparent"}`}>
      <div className="!px-8 lg:!px-20">
        <a href="#home" className="flex items-center gap-2">
          <img src="../public/images/logo.png" alt="logo" />
          <p>valvet pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-yellow border-b-2 border-transparent hover:border-yellow transition-colors duration-300 pb-1">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
