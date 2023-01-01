import React from "react";
import Radium from "radium";

const LogoB = ({ fontSize, className, style, sx }) => {
  const color = "yellow";
  const shadow = "-5px 0px 0px red";
  return (
    <h1
      style={{
        color: color,
        fontSize: fontSize,
        textShadow: shadow,
        lineHeight: 0.8,
        marginBottom: 2,
        ...sx,
        ...style,
      }}
      className={className}
    >
      B
    </h1>
  );
};

export default Radium(LogoB);
