import React from "react";
import { RingList } from "../components/RingList";
import Line from "../components/Line";

const ServicesPage = () => {
  const textList = [
    "Learning & Development",
    "Learning & Development",
    "Learning & Development",
    "Learning & Development",
  ];
  return (
    <div className="mt-[72px] px-56 py-8 text-white lg:py-16">
      <h3 className="mb-6 inline-flex items-center justify-center text-base font-bold text-lime-500">
        <Line />
        WHAT WE DO
      </h3>
      <div className="mt-2 w-[40%]">
        <h1 className="text-5xl font-bold">Services we provide</h1>
        <p className="text-2xl mt-4 tracking-[.20rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum,
          atque autem ullam voluptatibus saepe, sequi sit reprehenderit tempora
          soluta est laudantium libero at inventore praesentium cumque accusamus
          voluptate necessitatibus.
        </p>
      </div>
      <div className="mt-[14rem]">
        <h1 className="w-[40%] text-5xl font-bold">
          Software Engineering & Architecture
        </h1>
        <div className="flex flex-row gap-8 justify-between">
          <p className="text-2xl mt-4 tracking-[.20rem] w-[55%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum,
            atque autem ullam voluptatibus saepe, sequi sit reprehenderit
            tempora soluta est laudantium libero at inventore praesentium cumque
            accusamus voluptate necessitatibus.
          </p>
          <div>
            <RingList text={textList}></RingList>
          </div>
        </div>
      </div>
      <div className="mt-[14rem]">
        <h1 className=" text-5xl font-bold text-right">
          Cloud Migration
        </h1>
        <div className="flex flex-row gap-8 justify-between">
          <div>
            <RingList text={textList}></RingList>
          </div>
          <p className="text-2xl mt-4 tracking-[.20rem] w-[55%] text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum,
            atque autem ullam voluptatibus saepe, sequi sit reprehenderit
            tempora soluta est laudantium libero at inventore praesentium cumque
            accusamus voluptate necessitatibus.
          </p>
        </div>
      </div>
      <div className="mt-[14rem]">
        <h1 className="w-[40%] text-5xl font-bold">
         Data Engineering
        </h1>
        <div className="flex flex-row gap-8 justify-between">
          <p className="text-2xl mt-4 tracking-[.20rem] w-[55%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum,
            atque autem ullam voluptatibus saepe, sequi sit reprehenderit
            tempora soluta est laudantium libero at inventore praesentium cumque
            accusamus voluptate necessitatibus.
          </p>
          <div>
            <RingList text={textList}></RingList>
          </div>
        </div>
      </div>
      <div className="mt-[14rem]">
        <h1 className="text-5xl font-bold text-right">
          Quality Assurance
        </h1>
        <div className="flex flex-row gap-8 justify-between">
          <div>
            <RingList text={textList}></RingList>
          </div>
          <p className="text-2xl mt-4 tracking-[.20rem] w-[55%] text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum,
            atque autem ullam voluptatibus saepe, sequi sit reprehenderit
            tempora soluta est laudantium libero at inventore praesentium cumque
            accusamus voluptate necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
