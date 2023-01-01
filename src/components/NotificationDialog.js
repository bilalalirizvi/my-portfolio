import React from "react";
import { Stack } from "../components";

const NotificationDialog = ({ text, bgc }) => {
  return (
    <Stack
      p={15}
      style={{
        width: 237,
        backgroundColor: bgc,
      }}
      className="notificationDialog"
    >
      <p style={{ color: "white", fontSize: 14 }}>{text}</p>
    </Stack>
  );
};

export default NotificationDialog;
