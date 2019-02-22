import React from "react";

const Header = props => {
  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-branding">
        <p id="site-title">
          <a href="/#" rel="home">
            Headless WP
          </a>
        </p>
        <p id="site-description">With React</p>
      </div>

      <nav id="site-navigation" className="main-navigation" role="navigation" />
    </header>
  );
};
export default Header;
