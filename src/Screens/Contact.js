import React, { useEffect, useState, useRef } from "react";
import { NotificationDialog, Stack, Tag, TextMotion } from "../components";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markerIconPng from "../assets/images/mapLogo.png";
import Radium from "radium";
import emailjs from "@emailjs/browser";

const styles = {
  container: {
    backgroundColor: "#1D1D1D",
    height: "100%",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      height: "auto",
    },
    "@media (max-width: 700px)": {
      padding: "50px 20px",
    },
  },
  left: {
    flex: 1,
    "@media (max-width: 700px)": {
      padding: "0px",
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
  formInnerDiv: {
    "@media (max-width: 700px)": {
      margin: "0px 30px",
    },
  },
  button: {
    border: "1px solid yellow",
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
      marginTop: "0px",
    },
  },
  nameEmailInputBox: {
    "@media (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
  nameEmailInput: {
    width: "50%",
    height: 41,
    "@media (max-width: 1024px)": {
      width: "100%",
    },
  },
  input: {
    height: 40,
    backgroundColor: "#2B2B2B",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    outline: "none",
    padding: "0px 20px",
    color: "#fff",
    fontFamily: "Roboto",
    width: "100%",
  },
  textarea: {
    height: 100,
    backgroundColor: "#2B2B2B",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    outline: "none",
    resize: "vertical",
    padding: "10px 20px",
    color: "#fff",
    fontFamily: "Roboto",
  },
  map: {
    // flex: 1,
    width: "50%",
    filter: "grayscale(1) invert(1)",
    "@media (max-width: 900px)": {
      height: "400px",
      width: "100%",
      // flex: 0,
    },
  },
  infoMap: {
    zIndex: 2000,
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "green",
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
  formTag: {
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

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [notification, setNotification] = useState([]);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      const temp = [...notification];
      temp.push({
        type: "dark",
        bgColor: "black",
        message: "Have any questions? Drop me a line...",
      });
      setNotification(temp);
    }, 2000);
    setTimeout(() => {
      setNotification((state) =>
        state.filter((x) => {
          return x.type !== "dark";
        })
      );
    }, 5000);
  }, []);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const formHandle = async (e) => {
    e.preventDefault();
    !name.trim() ? setNameError(true) : setNameError(false);
    !validateEmail(email) ? setEmailError(true) : setEmailError(false);
    !subject.trim() ? setSubjectError(true) : setSubjectError(false);
    !message.trim() ? setMessageError(true) : setMessageError(false);
    if (
      name.trim() &&
      validateEmail(email) &&
      subject.trim() &&
      message.trim()
    ) {
      const values = {
        name,
        email,
        subject,
        message,
      };
      emailjs
        .sendForm(
          "service_u6iclo7",
          "template_xqm5fcm",
          form.current,
          "nVjOqqRA588UTQAkm"
        )
        .then(
          (response) => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setNotification((state) => [
              ...state,
              {
                type: "success",
                bgColor: "#52B532",
                message: "Your message submitted successfully.",
              },
            ]);
            setTimeout(() => {
              setNotification((state) =>
                state.filter((x) => {
                  return x.type !== "success";
                })
              );
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      setNotification((state) => [
        ...state,
        {
          type: "danger",
          bgColor: "red",
          message: "Please fill in all required fields...",
        },
      ]);
    }
    setTimeout(() => {
      setNotification((state) =>
        state.filter((x) => {
          return x.type !== "danger";
        })
      );
    }, 3000);
  };

  return (
    <Stack style={{ height: "100vh", position: "relative" }}>
      <Stack
        style={{
          width: 237,
          position: "absolute",
          bottom: "30px",
          right: "30px",
          zIndex: 2000,
        }}
        spacing={10}
      >
        {notification?.map(({ message, bgColor }, index) => {
          return (
            <NotificationDialog key={index} bgc={bgColor} text={message} />
          );
        })}
      </Stack>
      <Stack direction={"row"} style={styles.container}>
        {/* LEFT */}
        <Stack p={30} style={styles.left}>
          <Tag el={"html"} />
          <Tag el={"body"} style={styles.bodyTag} />
          <Stack direction={"row"} style={{ flex: 1 }}>
            <Stack style={{ flex: 1 }} justifyContent={"center"}>
              <Tag el={"h1"} style={styles.h1Tag} />
              <h1 style={styles.heading}>
                {"Contact me".split("").map((x, i) => {
                  return (
                    <TextMotion key={i}>{x === " " ? "\u00a0" : x}</TextMotion>
                  );
                })}
              </h1>
              <Tag el={"/h1"} style={styles.h1Tag} />
              {/* <Tag el={"p"} ml={40} />
                <p style={{ color: "#909096", fontSize: 15, marginLeft: 60 }}>Text</p>
                <Tag el={"/p"} ml={40} /> */}
              <Tag el={"form"} style={styles.formTag} />
              <form autoComplete="off" ref={form}>
                <Stack mx={60} spacing={8} style={styles.formInnerDiv}>
                  <Stack
                    direction={"row"}
                    spacing={8}
                    style={styles.nameEmailInputBox}
                  >
                    <Stack style={styles.nameEmailInput}>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setNameError(false);
                        }}
                        style={{
                          ...styles.input,
                          borderBottom: nameError ? "1px solid red" : "none",
                        }}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      />
                      {nameFocus && <label htmlFor="subject"></label>}
                    </Stack>
                    <Stack style={styles.nameEmailInput}>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError(false);
                        }}
                        style={{
                          ...styles.input,
                          borderBottom: emailError ? "1px solid red" : "none",
                        }}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      {emailFocus && <label htmlFor="subject"></label>}
                    </Stack>
                  </Stack>
                  <Stack style={{ height: 41 }}>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        setSubjectError(false);
                      }}
                      style={{
                        ...styles.input,
                        borderBottom: subjectError ? "1px solid red" : "none",
                      }}
                      onFocus={() => setSubjectFocus(true)}
                      onBlur={() => setSubjectFocus(false)}
                    />
                    {subjectFocus && <label htmlFor="subject"></label>}
                  </Stack>
                  <Stack style={{ height: 101 }}>
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setMessageError(false);
                      }}
                      style={{
                        ...styles.textarea,
                        borderBottom: messageError ? "1px solid red" : "none",
                      }}
                      onFocus={() => setMessageFocus(true)}
                      onBlur={() => setMessageFocus(false)}
                    ></textarea>
                    {messageFocus && <label htmlFor="subject"></label>}
                  </Stack>

                  <Stack
                    mt={30}
                    style={{
                      "@media (max-width: 700px)": {
                        marginTop: "10px",
                      },
                    }}
                  >
                    <button
                      onClick={formHandle}
                      style={styles.button}
                      className="sendMessageBtn"
                    >
                      Send message!
                    </button>
                  </Stack>
                </Stack>
              </form>
              <Tag el={"/form"} style={styles.formTag} mt={5} />
            </Stack>
          </Stack>
          <Tag el={"/body"} style={styles.bodyTag} />
          <Tag el={"/html"} />
        </Stack>
        {/* RIGHT */}
        <Stack style={styles.map}>
          {/* <Stack style={{ flex: 1 }}> */}
          <MapContainer
            center={[24.8532795, 67.0696265]}
            zoom={11}
            scrollWheelZoom={false}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Stack style={styles.infoMap} p={15}>
              <p style={{ color: "white" }}>Bilal Ali</p>
              <p style={{ color: "white", marginBottom: 5 }}>
                Karachi, Pakistan
              </p>
              <p style={{ color: "white" }}>
                <span style={{ color: "yellow" }}>@</span>
                :bilalalirizvi5@gmail.com
              </p>
            </Stack>
            <Marker
              position={[24.8532795, 67.0696265]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [45, 45],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>Karachi, Pakistan</Popup>
            </Marker>
            <ZoomControl position="bottomleft" />
          </MapContainer>
          {/* </Stack> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Radium(Contact);
