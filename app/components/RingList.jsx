import React from "react";

export const RingList = ({text}) => {
  const items = Array.from({ length: 6 }).map((_, index) => (
    <li key={index} className="mt-[2px] h-2 w-[2px] bg-lime-500"></li>
  ));
  return (
    <>
      <div className="flex flex-row gap-4 items-end">
        <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full border border-lime-500">
          <div className="h-3 w-3 rounded-full border border-lime-500"></div>
        </div>
        <div>
            <span className="text-2xl tracking-[.20rem]">{text[0]}</span>
        </div>
      </div>

      <ul className="flex w-6 list-none flex-col items-center justify-center">
        {items}
      </ul>
      <div className="flex flex-row gap-4 items-end">
        <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full border border-lime-500">
          <div className="h-3 w-3 rounded-full border border-lime-500"></div>
        </div>
        <div>
            <span className="text-2xl tracking-[.20rem]">{text[1]}</span>
        </div>
      </div>

      <ul className="flex w-6 list-none flex-col items-center justify-center">
        {items}
      </ul>
      <div className="flex flex-row gap-4 items-end">
        <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full border border-lime-500">
          <div className="h-3 w-3 rounded-full border border-lime-500"></div>
        </div>
        <div>
            <span className="text-2xl tracking-[.20rem]">{text[2]}</span>
        </div>
      </div>

      <ul className="flex w-6 list-none flex-col items-center justify-center">
        {items}
      </ul>
      <div className="flex flex-row gap-4 items-end">
        <div className="flex h-6 w-6 flex-row items-center justify-center rounded-full border border-lime-500">
          <div className="h-3 w-3 rounded-full border border-lime-500"></div>
        </div>
        <div>
            <span className="text-2xl tracking-[.20rem]">{text[3]}</span>
        </div>
      </div>
    </>
  );
};
