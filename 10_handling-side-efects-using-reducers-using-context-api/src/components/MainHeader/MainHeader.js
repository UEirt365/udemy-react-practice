import React, { useContext } from "react";
import AuthContext from "../store/auth-context";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={ctx.onLogout} />
    </header>
  );
};

export default MainHeader;
