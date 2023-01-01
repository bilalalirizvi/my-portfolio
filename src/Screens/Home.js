import React, { useEffect } from "react";
import { Stack, Tag, LogoB, TextMotion } from "../components";
import Radium from "radium";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#1D1D1D",
    minHeight: "100vh",
    "@media (max-width: 700px)": {
      padding: "50px 20px",
    },
  },

  heading: {
    color: "#fff",
    fontSize: 80,
    marginLeft: 60,
    display: "flex",
    lineHeight: 1,
    zIndex: 100,
    "@media (max-width: 900px)": {
      fontSize: "60px",
    },
    "@media (max-width: 700px)": {
      fontSize: "30px",
      marginLeft: "30px",
    },
  },
  text: {
    color: "#c4c4c4",
    fontSize: 15,
    marginLeft: 60,
    zIndex: 100,
    "@media (max-width: 700px)": {
      marginLeft: "30px",
    },
  },
  button: {
    border: "1px solid yellow",
    marginLeft: 60,
    width: 170,
    height: 40,
    letterSpacing: 2,
    color: "yellow",
    backgroundColor: "transparent",
    zIndex: 100,
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "@media (max-width: 700px)": {
      marginLeft: "30px",
    },
  },
  h1ClosingTag: {
    marginTop: "60px",
    "@media (max-width: 900px)": {
      marginTop: "40px",
    },
    "@media (max-width: 700px)": {
      marginTop: "18px",
    },
  },
  logo: {
    marginBottom: "0px",
    lineHeight: 1,
    marginLeft: "20px",
    "@media (max-width: 900px)": {
      fontSize: "60px",
    },
    "@media (max-width: 700px)": {
      fontSize: "30px",
    },
  },
  lgThen: {
    color: "#262626",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 300,
    right: 90,
    top: 120,
    "@media (max-width: 900px)": {
      fontSize: "200px",
      top: "250px",
      right: "30px",
    },
    "@media (max-width: 700px)": {
      fontSize: "150px",
      top: "400px",
      right: "30px",
    },
  },
  bodyTag: {
    marginLeft: "20px",
    "@media (max-width: 700px)": {
      marginLeft: "10px",
    },
  },
  h1Tag: {
    marginLeft: "40px",
    "@media (max-width: 700px)": {
      marginLeft: "20px",
    },
  },
  pTag: {
    marginLeft: "40px",
    "@media (max-width: 700px)": {
      marginLeft: "20px",
    },
  },
  buttonTag: {
    marginLeft: "40px",
    "@media (max-width: 700px)": {
      marginLeft: "20px",
    },
  },
};

const Home = () => {
  const sentence = "I'm Bilal,".split("");
  sentence.splice(4, 1, <LogoB fontSize={80} style={styles.logo} />);
  const navigate = useNavigate();
  return (
    <Stack p={30} style={styles.container}>
      <Tag el={"html"} />
      <Tag el={"body"} style={styles.bodyTag} />
      <Stack style={{ flex: 1 }} justifyContent={"center"}>
        <Tag el={"h1"} style={styles.h1Tag} mb={-10} />
        <h1 style={styles.heading}>
          {"Hi,".split("").map((x, i) => {
            return (
              <TextMotion key={i * 2}>{x === " " ? "\u00a0" : x}</TextMotion>
            );
          })}
        </h1>
        <h1 style={styles.heading}>
          {sentence.map((x, i) => {
            return (
              <TextMotion key={i * 3}>{x === " " ? "\u00a0" : x}</TextMotion>
            );
          })}
        </h1>
        <h1 style={styles.heading}>
          {"Web Developer".split("").map((x, i) => {
            return (
              <TextMotion key={i * 4}>{x === " " ? "\u00a0" : x}</TextMotion>
            );
          })}
          <span>
            <Tag el={"/h1"} ml={10} style={styles.h1ClosingTag} />
          </span>
        </h1>
        <Tag el={"p"} style={styles.pTag} />
        <p style={styles.text}>Front End Developer / React Js & React Native</p>
        <Tag el={"/p"} style={styles.pTag} />
        <Tag el={"button"} style={styles.buttonTag} />
        <button
          onClick={() => navigate("/contact")}
          style={styles.button}
          className="contactMeBtn"
        >
          Contact me!
        </button>
        <Tag el={"/button"} style={styles.buttonTag} mt={8} />
      </Stack>
      <Tag el={"/body"} style={styles.bodyTag} />
      <Tag el={"/html"} />
      <p style={styles.lgThen} className="lgThen">
        &lt;/&gt;
      </p>
    </Stack>
  );
};

export default Radium(Home);
