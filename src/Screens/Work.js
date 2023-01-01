import React from "react";
import Radium from "radium";
import { Stack, Swiper } from "../components";

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#1D1D1D",
    overflow: "hidden",
    "@media (max-width: 600px)": {
      padding: "80px 20px",
    },
  },
};

const Work = () => {
  return (
    <Stack p={80} justifyContent={"center"} style={styles.container}>
      <Swiper />
    </Stack>
  );
};

export default Radium(Work);
