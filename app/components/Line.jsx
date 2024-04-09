import React from "react";
import Image from "next/image";

const Line = () => {
  return (
    <Image
      src="/lineVector.svg"
      alt="line vector svg image"
      width={56}
      height={3}
      className="mr-2 fill-white opacity-70"
    />
  );
};

export default Line;
