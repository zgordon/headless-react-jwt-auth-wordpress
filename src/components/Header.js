import React from "react";

const Header = props => {
  return (
    <header id="masthead" class="site-header" role="banner">
      <div class="site-branding">
        <p id="site-title">
          <a href="/#" rel="home">
            Headless WP
          </a>
        </p>
        <p id="site-description">With React</p>
      </div>

      <nav id="site-navigation" class="main-navigation" role="navigation" />
    </header>
  );
};
export default Header;
