import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiGitRepoForked, BiLink, BiLoaderAlt } from "react-icons/bi";
import Radium from "radium";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { Stack } from "../../components";

import pattern from "../../assets/images/pattern.jpg";
import data from "../../projectData";

const styles = {
  swiperSlide: {
    color: "initial",
    fontSize: "initial",
    fontWeight: "initial",
  },
  card: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    "@media (max-width: 700px)": {
      flexDirection: "column",
    },
  },
  cardContentOverlay: {
    width: "50%",
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },
  cardContent: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  cardImage: {
    width: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
    "@media (max-width: 700px)": {
      width: "100%",
      height: 400,
    },
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: "yellow",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
};

const Index = () => {
  const [displayShortContent, setDisplayShortContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisplayShortContent(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data?.map(
        (
          {
            projectName,
            projectSubname,
            projectDetail,
            githubRepoUrl,
            hostedUrl,
            image,
            shortDetail,
          },
          index
        ) => {
          return (
            <SwiperSlide
              style={styles.swiperSlide}
              className="swiperSlide"
              key={index}
            >
              <Stack style={styles.card}>
                <Stack style={styles.cardContentOverlay}>
                  <Stack
                    p={40}
                    style={styles.cardContent}
                    justifyContent="space-between"
                  >
                    <Stack spacing={20}>
                      <Stack>
                        <h1 style={{ color: "yellow" }}>{projectName}</h1>
                        <h3 style={{ color: "yellow" }}>{projectSubname}</h3>
                      </Stack>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: 15,
                          marginBottom: 20,
                          "@media (max-width: 800px)": {
                            marginBottom: 0,
                          },
                        }}
                      >
                        {displayShortContent ? shortDetail : projectDetail}
                      </p>

                      <Stack
                        direction={"row"}
                        spacing={5}
                        className="linkIconSmall"
                      >
                        <span style={styles.icon}>
                          <BiGitRepoForked />
                        </span>
                        <span style={styles.icon}>
                          <BiLink />
                        </span>
                      </Stack>

                      <Stack spacing={10} className="linkIcon">
                        <Stack
                          py={15}
                          px={20}
                          spacing={10}
                          direction="row"
                          alignItems={"center"}
                          style={{
                            backgroundColor: "#1D1D1D",
                            borderRadius: 10,
                          }}
                        >
                          <span style={styles.icon}>
                            <BiGitRepoForked />
                          </span>
                          <Stack>
                            <h5 style={{ color: "yellow" }}>
                              Github Repository:
                            </h5>
                            <a
                              href={githubRepoUrl}
                              target={"_blank"}
                              style={{ color: "white", fontSize: 13 }}
                              rel="noreferrer"
                            >
                              {githubRepoUrl}
                            </a>
                          </Stack>
                        </Stack>

                        <Stack
                          py={15}
                          px={20}
                          spacing={10}
                          direction="row"
                          alignItems={"center"}
                          style={{
                            backgroundColor: "#1D1D1D",
                            borderRadius: 10,
                          }}
                        >
                          <span style={styles.icon}>
                            <BiLink />
                          </span>
                          <Stack>
                            <h5 style={{ color: "yellow" }}>Hosted:</h5>
                            <a
                              href={hostedUrl}
                              target={"_blank"}
                              style={{ color: "white", fontSize: 13 }}
                              rel="noreferrer"
                            >
                              {hostedUrl || "N/A"}
                            </a>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    <BiLoaderAlt
                      color="yellow"
                      style={{
                        alignSelf: "center",
                      }}
                      className="loader"
                    />
                  </Stack>
                </Stack>
                <Stack
                  style={{
                    ...styles.cardImage,
                    backgroundImage: `url(${image})`,
                  }}
                ></Stack>
              </Stack>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

export default Radium(Index);
