import React, { PureComponent } from "react";
import footerModel from "./footer-model";
import { NavItems } from "../molecules/NavItems";

import "./Footer.css";

class Footer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { search, navLinks } = footerModel;
    return (
      <footer>
        <div className="footer-content">
          <NavItems links={navLinks} />
          <div className="searchbox-container">
            <span className="search-txt">{search} : </span>
            <input type="text" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
