import React from "react";
// <svg className=" -mr-1 ml-2 h-4 w-4 fill-black">
//   // <image href="/arrowfwd.svg" />
//   //{" "}
// </svg>
const Button = ({ mode = "primary", text }) => {
  return mode === "primary" ? (
    <button className="inline-flex items-center justify-center rounded border border-lime-600 bg-lime-500 px-5 py-3 text-center text-xl font-medium text-black hover:bg-lime-800 focus:ring-4 focus:ring-lime-300">
      {text}

      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="-mr-1 ml-1 mt-0.5 h-5 w-5  fill-black"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#000000"
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
          ></path>
        </g>
      </svg>
    </button>
  ) : (
    <button className="group inline-flex items-center justify-center rounded border border-white/80 px-5 py-3 text-center text-xl font-medium text-white hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100">
      {text}{" "}
      <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className="-mr-1 ml-1 mt-[1px] h-5 w-5  fill-white group-hover:fill-black"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            // fill="#000000"
            d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default Button;
// <svg className="-mr-1 ml-2 h-5 w-5 fill-white group-hover:fill-black">
//         <image href="/arrowfwd.svg" />
//       </svg>
