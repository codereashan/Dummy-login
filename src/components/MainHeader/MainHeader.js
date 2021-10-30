import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
