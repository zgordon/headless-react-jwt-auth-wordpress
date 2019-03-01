import React from "react";

const Aside = props => {
  console.log(props);
  return (
    <aside id="secondary" className="widget-area">
      {props.isAuthenticated ? (
        <button
          onClick={() => {
            props.appService.logout(props.setIsAuthenticated);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            props.appService.login(props.setIsAuthenticated);
          }}
        >
          Login
        </button>
      )}
    </aside>
  );
};
export default Aside;
