import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Stack, SideMenu, LoadingSlide, SideMenuMob } from "../components";
import { FaBars } from "react-icons/fa";
import Music from "../components/Music";
import Radium from "radium";

const styles = {
  mainScreen: {
    flex: 1,
    position: "relative",
    marginLeft: 130,
    backgroundColor: "#1D1D1D",
    "@media (max-width: 700px)": {
      marginLeft: "0px",
    },
  },
  menuIcon: {
    height: 40,
    width: 40,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 100,
    cursor: "pointer",
    "@media (min-width: 700px)": {
      display: "none",
    },
  },
};

const Main = () => {
  const [slide, setSlide] = useState("");
  const [sideMenu, setSideMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setSlide(location.pathname);
    }, 800);
  }, [location]);

  const closeMenu = () => {
    setSideMenu(false);
  };

  return (
    <Stack direction="row">
      <SideMenu showMenu={sideMenu} closeMenu={closeMenu} />
      {sideMenu && <SideMenuMob closeMenu={closeMenu} />}
      <Stack style={styles.mainScreen}>
        <Music />
        <span style={styles.menuIcon}>
          <FaBars onClick={() => setSideMenu(true)} color="#fff" size={25} />
        </span>
        {slide !== location.pathname ? <LoadingSlide /> : <Outlet />}
      </Stack>
    </Stack>
  );
};

export default Radium(Main);
