import React from "react";
import Button from "../components/Button";

const ContactPage = () => {
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
            <input
              type="text"
              id="first_name"
              class="text-md block w-full rounded border border-gray-300 bg-transparent px-8 py-3.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
              placeholder="Name"
              required
            />
          </div>
          <div className="my-12">
            <input
              type="text"
              id="first_name"
              class="text-md block w-full rounded border border-gray-300 bg-transparent px-8 py-3.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="my-12">
            <input
              type="text"
              id="first_name"
              class="text-md block w-full rounded border border-gray-300 bg-transparent px-8 py-3.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
              placeholder="How did you hear about us?"
              required
            />
            <p className="text-1xl my-12">
              What service do you need help with?
            </p>

            <div className="my-12 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-6 bg-gray-900 p-8">
                <p className="border-spacing-3  border  border-lime-500 px-5 py-5"></p>
                <p className="text-bold">Software Engineering & Architecture</p>
              </div>
              <div className="flex items-center gap-6 bg-gray-900 p-8">
                <p className="border-spacing-3 border border-lime-500 px-5 py-5"></p>
                <p className="text-bold">Cloud Migration</p>
              </div>
              <div className="flex items-center gap-6 bg-gray-900 p-8">
                <p className="border-spacing-3 border border-lime-500 px-5 py-5"></p>
                <p className="text-bold">Data Engineering</p>
              </div>
              <div className="flex items-center gap-6 bg-gray-900  p-8">
                <p className="border-spacing-3 border border-lime-500 px-5 py-5"></p>
                <p className="text-bold">Quality Assurance</p>
              </div>
            </div>
          </div>
          <div className="className="my-12>
            <textarea
              placeholder="Your Message"
              id="message"
              rows="6"
              class="text-md block w-full rounded border border-gray-300 bg-transparent px-8 py-3.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400"
            ></textarea>
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
