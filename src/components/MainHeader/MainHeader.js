import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      {/* <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /> */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
