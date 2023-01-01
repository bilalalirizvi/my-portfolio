import React from "react";
import { Stack } from "../components";
import Radium from "radium";

const SkillsChart = ({ text, color, size }) => {
  return (
    <Stack
      justifyContent={"space-between"}
      style={{
        height: "25px",
        paddingRight: "60px",
        "@media (max-width: 950px)": {
          paddingLeft: "60px",
        },
        "@media (max-width: 700px)": {
          paddingLeft: "30px",
          paddingRight: "30px",
        },
      }}
    >
      <span
        style={{
          color: "white",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        {text}
      </span>
      <footer
        style={{
          height: 3,
          backgroundColor: "rgb(60,60,60)",
          borderRadius: 10,
        }}
      >
        <Stack
          style={{
            height: 3,
            backgroundColor: color,
            width: size,
            borderRadius: 10,
          }}
        ></Stack>
      </footer>
    </Stack>
  );
};

export default Radium(SkillsChart);
