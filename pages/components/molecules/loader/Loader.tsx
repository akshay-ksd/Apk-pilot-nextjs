import React from 'react';

interface LoaderProps {
  height: number;
  width: number;
  color: string;
}

const Loader: React.FC<LoaderProps> = ({ height, width, color }) => {
  // Define the style object with dynamic properties
  const loaderStyle = {
    width: `${width}px`,
    height: `${height}px`,
    borderColor: color,
  };

  return (
    <div
      className="border-t-2 border-solid rounded-full animate-spin"
      style={loaderStyle}
    ></div>
  );
};

export default Loader;
