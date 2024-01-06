import React from "react";

const ImageComponent = ({ photo, borderRadius }) => {
  return (
    <img
      style={{ width: "100%", height: "100%", borderRadius: `${borderRadius}` }}
      src={`${photo}`}
      alt="loading image..."
    />
  );
};

export default ImageComponent;
