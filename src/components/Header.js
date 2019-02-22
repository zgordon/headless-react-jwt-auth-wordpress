import React from "react";

const Header = ({ siteName, siteDescription }) => {
  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="site-branding">
        <p id="site-title">
          <a href="/#" rel="home">
            {siteName}
          </a>
        </p>
        <p id="site-description">{siteDescription}</p>
      </div>

      <nav id="site-navigation" className="main-navigation" role="navigation" />
    </header>
  );
};
export default Header;
