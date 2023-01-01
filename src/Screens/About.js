import React from "react";
import { Stack, Tag, TextMotion } from "../components";
import Radium from "radium";
import TagsCanvas from "react-tags-canvas";

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
    width: "500px",
    "@media (max-width: 950px)": {
      width: "100%",
    },
  },
  content: {
    width: "500px",
    "@media (max-width: 700px)": {
      width: "100%",
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

const About = () => {
  return (
    <Stack p={30} style={styles.container} direction="row">
      <Stack style={styles.leftSide}>
        <Tag el={"html"} />
        <Tag el={"body"} style={styles.bodyTag} />
        <Stack style={{ ...styles.content, flex: 1 }} justifyContent={"center"}>
          <Tag el={"h1"} style={styles.h1Tag} />
          <h1 style={styles.heading}>
            {"My, Myself & I".split("").map((x, i) => {
              return (
                <TextMotion key={i}>{x === " " ? "\u00a0" : x}</TextMotion>
              );
            })}
          </h1>
          <Tag el={"/h1"} style={styles.h1Tag} />
          <Tag el={"p"} style={styles.pTag} />
          <p style={styles.text} className="textSelect">
            As an experienced Accounting Manager with over 10 years experience
            in finance, I have recently made the switch to Web and Mobile
            Application Development using React and React Native. I am
            passionate about this field and have dedicated myself to building my
            skillset from the ground up.
          </p>
          <p
            style={{
              ...styles.text,
              marginTop: 20,
              marginBottom: 20,
            }}
            className="textSelect"
          >
            In addition to my professional experience, I also have a strong
            sense of design, honed through my hobby of graphic design. My
            portfolio showcases my abilities in this area.
          </p>
          <p style={styles.text} className="textSelect">
            I am excited to bring my diverse skill set and experience to a new
            role in the field of Web and Mobile Application Development, and am
            eager to continue learning and growing in this exciting and
            constantly evolving field.
          </p>

          <Tag el={"/p"} style={styles.pTag} />
        </Stack>
        <Tag el={"/body"} style={styles.bodyTag} />
        <Tag el={"/html"} />
      </Stack>
      <Stack style={{ flex: 1 }} justifyContent={"center"}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <TagsCanvas
            height={400}
            width={600}
            textColour="yellow"
            maxSpeed={0.1}
            freezeActive
            shuffleTags
            shape="sphere"
            zoom={1}
            noSelect
            textFont={"Roboto"}
            pinchZoom={false}
            weightSize={0.8}
            tags={[
              { value: "React Js", weight: 45 },
              { value: "React Native", weight: 45 },
              { value: "Firebase", weight: 30 },
              { value: "Material UI", weight: 30 },
              { value: "Context API", weight: 30 },
              { value: "Redux", weight: 30 },
              { value: "Javascript", weight: 20 },
              { value: "HTML5", weight: 20 },
              { value: "CSS3", weight: 20 },
              { value: "Flex", weight: 20 },
              { value: "Git", weight: 20 },
              { value: "NodeJS", weight: 20 },
              { value: "ES5/ES6", weight: 20 },
              { value: "Npm", weight: 20 },
              { value: "Bootstrap", weight: 20 },
            ]}
          />
        </div>
      </Stack>
    </Stack>
  );
};

export default Radium(About);
