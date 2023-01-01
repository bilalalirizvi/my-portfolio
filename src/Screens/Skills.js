import React from "react";
import Radium from "radium";
import { SkillsChart, Stack, Tag, TextMotion } from "../components";
import { Link } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#1D1D1D",
    minHeight: "100vh",
    "@media (max-width: 950px)": {
      flexDirection: "column",
    },
    "@media (max-width: 700px)": {
      padding: "50px 20px",
    },
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    "@media (max-width: 950px)": {
      marginTop: "20px",
    },
  },
  heading: {
    color: "yellow",
    fontSize: 40,
    marginLeft: 60,
    display: "flex",
    lineHeight: 1,
    "@media (max-width: 700px)": {
      fontSize: "30px",
      marginLeft: "30px",
    },
  },
  text: {
    color: "#c4c4c4",
    fontSize: 15,
    marginLeft: 60,
    paddingRight: 60,
    "@media (max-width: 700px)": {
      marginLeft: "30px",
      paddingRight: "30px",
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
    cursor: "pointer",
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
};

const Skills = () => {
  return (
    <Stack p={30} style={styles.container} direction="row">
      <Stack style={styles.leftSide}>
        <Tag el={"html"} />
        <Tag el={"body"} style={styles.bodyTag} />
        <Stack style={{ ...styles.content, flex: 1 }} justifyContent={"center"}>
          <Tag el={"h1"} style={styles.h1Tag} />
          <h1 style={styles.heading}>
            {"Skills & Experience".split("").map((x, i) => {
              return (
                <TextMotion key={i}>{x === " " ? "\u00a0" : x}</TextMotion>
              );
            })}
          </h1>
          <Tag el={"/h1"} style={styles.h1Tag} />
          <Tag el={"p"} style={styles.pTag} />
          <p style={styles.text} className="textSelect">
            I am a highly skilled developer with experience in building a
            variety of web and mobile applications. Some of my key skills
            include React.js, React Native, and Firebase, which I have used to
            build a number of successful projects. These include: <br /> <br />
            1. Instalogue Social App - Photo sharing social network <br />
            2. Next Sale - Online classified <br />
            3. Simply Natural - Plants e-commerce website <br />
            4. The Mount Inn Hotel - Static website for hotel business <br />
            5. Marfani Steels - CRM - CRM system for a local business
            <br />
            6. Ride App - Ride-hailing app <br /> <br /> Detailed descriptions
            can be found{" "}
            <Link
              to="/work"
              style={{
                textDecoration: "none",
                color: "yellow",
                cursor: "pointer",
              }}
            >
              here
            </Link>
            . In addition to these notable projects, I have also completed a
            number of other projects, the repositories for which can be found on
            my{" "}
            <a
              href="https://github.com/bilalalirizvi?tab=repositories"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "yellow",
                cursor: "pointer",
              }}
              rel="noreferrer"
            >
              GitHub profile
            </a>
            . My strong skills in React.js, React Native, and Firebase, as well
            as my experience with Material-UI, Redux.js, Netlify, and Git, have
            allowed me to consistently deliver high-quality work.
          </p>
          <Tag el={"/p"} style={styles.pTag} />
        </Stack>
        <Tag el={"/body"} style={styles.bodyTag} />
        <Tag el={"/html"} />
      </Stack>
      <Stack style={styles.rightSide} spacing={30} justifyContent="center">
        <SkillsChart text={"React Js"} size={"90%"} color={"yellow"} />
        <SkillsChart text={"React Native"} size={"50%"} color={"red"} />
        <SkillsChart text={"Redux.js"} size={"90%"} color={"pink"} />
        <SkillsChart text={"Firebase"} size={"80%"} color={"green"} />
        <SkillsChart text={"Git"} size={"80%"} color={"purple"} />
        <SkillsChart text={"Material UI"} size={"90%"} color={"orange"} />
      </Stack>
    </Stack>
  );
};

export default Radium(Skills);
