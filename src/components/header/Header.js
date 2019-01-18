import React from "react";
import headerModel from "./header-model";
import { NavItems } from "../molecules/NavItems";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  const { title, logoUrl, navLinks, loginLink } = headerModel;

  return (
    <header>
      <img src={logoUrl} alt="logo" />
      <Link to="news">{title}</Link>
      <NavItems links={navLinks} />
    </header>
  );
};
export default Header;
