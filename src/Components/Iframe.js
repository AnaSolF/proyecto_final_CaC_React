import React from "react";

const Iframe = (props) => {
  return (
    <iframe
      width={props.width}
      height={props.height}
      src={props.src}
      title={props.title}
    ></iframe>
  );
};

export default Iframe;
