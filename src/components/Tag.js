import React from "react";
import Radium from "radium";

const Tag = ({
  el,
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
  className,
}) => {
  return (
    <p
      className={`${className} tagFont`}
      style={{
        color: "#515152",
        fontSize: 14,
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
      &lt;{el}&gt;
    </p>
  );
};

export default Radium(Tag);
