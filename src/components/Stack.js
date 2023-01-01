import React from "react";
import Radium from "radium";

const Stack = ({
  children,
  direction,
  justifyContent,
  alignItems,
  flexWrap,
  spacing,
  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  sx,
  style,
  onClick,
  className,
}) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: direction || "column",
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: flexWrap,
        gap: spacing,
        marginTop: mt || my || m,
        marginBottom: mb || my || m,
        marginLeft: ml || mx || m,
        marginRight: mr || mx || m,
        paddingTop: pt || py || p,
        paddingBottom: pb || py || p,
        paddingLeft: pl || px || p,
        paddingRight: pr || px || p,
        ...sx,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Radium(Stack);
