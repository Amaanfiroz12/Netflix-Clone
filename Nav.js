import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    function handleShow() {
      if (window.scrollY > 100) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    }

    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${isShown && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
