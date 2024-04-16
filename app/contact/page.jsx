"use client";

import React from "react";
import Button from "../components/Button";
import { CheckBox, Input, TextArea } from "../components/input";
import { IoMdCheckmark } from "react-icons/io";
import { useState, useEffect } from "react";


const ContactPage = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckmarkClick = (item) => {
    if(checkedItems.includes(item)){
     
      setCheckedItems((prevCheckedItems) => {
        return prevCheckedItems.filter(x=>x!==item);
      });
      
    }else{
      setCheckedItems((prevCheckedItems) => {
        return [...prevCheckedItems, item];
      });
    }
  };

  useEffect(()=>{
    console.log(checkedItems);
  },[checkedItems])

  return (
    <div className="mt-[72px] grid grid-cols-2 gap-[8rem] px-44 py-8 text-white lg:py-16">
      <div className="mt-32">
        <h1 className="text-8xl font-extrabold text-lime-500 ">Say Hey</h1>
        <h1 className="py-6 text-3xl font-bold tracking-[.25rem]">
          Not sure where to start?
        </h1>
        <span className="text-2xl tracking-[.25rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          autem alias quasi aliquam adipisci. Quod voluptas magni aspernatur
          provident rem, quasi corrupti quam id odio vel doloribus illo quae
          atque?
        </span>
      </div>
      <div>
        <span className="text-3xl">Drop us a line</span>
        <form action="" className="mt-7">
          <div className="my-12">
            <Input
              element={{
                required: "required",
                placeholder: "Name",
                id: "first_name",
                kind: "input",
                type: "text",
              }}
            ></Input>
          </div>
          <div className="my-12">
            <Input
              element={{
                required: "required",
                placeholder: "Email",
                id: "email",
                kind: "input",
                type: "email",
              }}
            ></Input>
          </div>
          <div className="my-12">
            <Input
              element={{
                required: "required",
                placeholder: "How did you hear about us",
                id: "info",
                kind: "input",
                type: "text",
              }}
            ></Input>
            <p className="text-1xl my-12">
              What service do you need help with?
            </p>

            <div className="my-12 grid grid-cols-2 gap-2">
              {[
                "Software Engineering & Architecture",
                "Cloud Migration",
                "Data Engineering",
                "Quality Assurance",
              ].map((item) => (
                <CheckBox
                  onClick={() => handleCheckmarkClick(item)}
                  key={item}
                  element={{
                    lineColor: "border-lime-500",
                    spaceX: 4,
                    spaceY: 4,
                    isChecked: checkedItems.includes(item),
                    title: item,
                    bg: "bg-lime-500",
                    checkedIcon: <IoMdCheckmark />,
                  }}
                ></CheckBox>
              ))}
            </div>
          </div>
          <div className="my-12">
            <TextArea
              element={{
                rows: 6,
                id: "comment",
                placeholder: "Your message",
              }}
            ></TextArea>
          </div>
          <div className="my-12">
            <Button text="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
