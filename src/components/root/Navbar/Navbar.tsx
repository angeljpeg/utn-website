import React from "react";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}
