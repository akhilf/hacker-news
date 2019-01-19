import React from "react";
//React.PropTypes has moved into a different package since React v15.5.Please use the prop - types library instead.
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavItems = ({ links }) => {
  return (
    <ul className="hz-list">
      {links.map((link, i) => (
        <li key={i}>
          <span>
            <Link className="footer-nav" to={link.url}>
              {link.text}
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );
};

NavItems.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired
};
