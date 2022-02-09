import React, { useRef } from "react";

import { TopLinksContainer } from "../TopLinks";
import { PTUTitleContainer } from "../PTUTitle";
import { MainNavContainer } from "../MainNav";

function Header() {
  const navRef = useRef();

  function openMobileMenu() {
    navRef.current?.openMobileMenu();
  }

  return (
    <>
      <TopLinksContainer />
      <PTUTitleContainer handleOnClick={openMobileMenu} />
      <MainNavContainer navRef={navRef} />
    </>
  );
}

export default Header;
