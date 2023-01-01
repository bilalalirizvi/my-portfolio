import React from "react";
import { Stack, LogoB } from "../components";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import Radium from "radium";

const styles = {
  menuContainer: {
    width: 130,
    height: "100vh",
    position: "fixed",
    zIndex: 1000,
    backgroundColor: "#181818",
    "@media (max-width: 700px)": {
      display: "none",
    },
  },
  logoScreen: {
    width: "100%",
    height: 180,
    backgroundColor: "black",
  },
  logoSubname: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
    transform: "scale(1, 0.8)",
  },
  logoLowerText: {
    color: "#c4c4c4",
    fontSize: 12,
  },
  closeIcon: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
    "@media (min-width: 700px)": {
      display: "none",
    },
  },
  navlink: {
    color: "#c4c4c4",
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #282828",
    textDecoration: "none",
  },
};

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <Stack style={styles.menuContainer}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={15}
        style={styles.logoScreen}
      >
        <Stack
          style={{ width: 47, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <LogoB fontSize={80} />
          <h3 style={styles.logoSubname}>Bilal</h3>
        </Stack>
        <p style={styles.logoLowerText}>Web Develepor</p>
      </Stack>
      <Stack style={{ flex: 1 }} className={"navlinks"}>
        <NavLink to="/about" style={styles.navlink}>
          About
        </NavLink>
        <NavLink to="/skills" style={styles.navlink}>
          My Skills
        </NavLink>
        <NavLink to="/work" style={styles.navlink}>
          Work
        </NavLink>
        <NavLink to="/contact" style={styles.navlink}>
          Contact
        </NavLink>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          spacing={15}
          my={15}
          className={"navlinks"}
        >
          <a
            href="https://github.com/bilalalirizvi"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#c4c4c4" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/bilal-ali-250582203/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="#c4c4c4" size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bilalalirizvi5@gmail.com&su=SUBJECT&body=BODY"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail color="#c4c4c4" size={20} />
          </a>
        </Stack>
      </Stack>
      <p
        style={{
          color: "#c4c4c4",
          fontSize: 11,
          padding: "0px 15px 15px 15px",
          textAlign: "center",
        }}
      >
        Built from scratch by me!
      </p>
    </Stack>
  );
};

export default Radium(SideMenu);

// Built from scratch by me!
