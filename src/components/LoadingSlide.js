import React from "react";
import { Stack, LogoB } from "../components";

const LoadingSlide = () => {
  return (
    <Stack
      p={40}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ height: "100vh", backgroundColor: "#1D1D1D" }}
      className="slideScreen"
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        style={{ width: 28, cursor: "pointer" }}
      >
        <LogoB fontSize={40} sx={{ marginLeft: 5 }} />
        <h3
          style={{
            color: "#fff",
            fontSize: 13,
            textAlign: "center",
            transform: "scale(1, 0.8)",
          }}
        >
          Bilal
        </h3>
      </Stack>
      <p
        style={{
          color: "rgb(150,150,150)",
          fontSize: 12,
          marginTop: 10,
          marginBottom: 20,
          letterSpacing: 2,
          transform: "scale(1, 0.8)",
        }}
      >
        Bilal is thinking
      </p>
      <div id="light">
        <div id="line"></div>
      </div>
    </Stack>
  );
};

export default LoadingSlide;
