import React from "react";
import Image from "next/image";
import Line from "../components/Line";

const TeamPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 pt-36 text-white md:pt-40 lg:px-32 xl:pt-48">
      {/* TEAM ABOUT SECTION */}
      <section className="">
        <div className="flex flex-col gap-16 xl:flex-row xl:gap-10">
          <div className="max-w-2xl">
            <h2 className="mb-6 inline-flex items-center justify-center text-base font-bold text-lime-500">
              <Line />
              WHO WE ARE
            </h2>

            <h1 className="mb-6 max-w-2xl text-4xl font-extrabold md:text-5xl xl:text-6xl">
              WHO WE ARE AT <br/> D'Tech
            </h1>
            <p className="mb-6 text-xl opacity-85">
              Our mission is to bring happiness to a billion people. We not only
              develop products, but also the individuals, teams and the
              environment. This is why we are very conscious of our people,
              values and culture.
            </p>
          </div>

          <Image
            src="/workteam.webp"
            alt="group of employees image"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="100vw , (max-width: 896px) 45vw"
            quality={100}
            priority={true}
            className="mx-auto w-full max-w-lg"
          />
        </div>
      </section>
      {/* TEAM ABOUT SECTION END */}

      {/* TEAM IMAGE SECTION */}
      <div className="my-48">
        <h2 className="mb-10 inline-flex items-center justify-center text-base font-bold text-lime-500">
          <Line />
          MEET OUR AWESOME TEAM
        </h2>

        {/* team images */}
        <div className="grid grid-cols-1 place-items-center gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          {/* CEO */}
          <div className="w-full max-w-[300px] shadow-lg shadow-lime-500/20">
            <Image
              src="/director.jpeg"
              alt="group of employees image"
              width={0}
              height={0}
              style={{
                height: "380px",
                maxHeight: "380px"
              }}
              sizes="100vw , (max-width: 896px) 45vw, (max-width: 1024px) 25vw"
              quality={100}
              priority={true}
              className="mx-auto w-full max-w-lg rounded-t-md"
            />
            <div className="w-full bg-gray-950 p-4">
              <h2 className="mb-1 text-lg font-bold">Engr. David Chigbo</h2>
              <h3 className="text-sm font-semibold text-lime-500">Technical Director</h3>
            </div>
          </div>
          {/* product designer */}
          <div className="w-full max-w-[300px] shadow-lg shadow-lime-500/20">
            <Image
              src="/Finance.jpeg"
              alt="group of employees image"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "380px",
                maxHeight: "380px"
              }}
              sizes="100vw , (max-width: 896px) 45vw, (max-width: 1024px) 25vw"
              quality={100}
              priority={true}
              className="mx-auto w-full max-w-lg rounded-t-md"
            />
            <div className="w-full bg-gray-950 p-4">
              <h2 className="mb-1 text-lg font-bold">Mrs Christabel David Chigbo</h2>
              <h3 className="text-sm font-semibold text-lime-500">
              Head Account / Finance
              </h3>
            </div>
          </div>
          {/* CTO */}
          <div className="w-full max-w-[300px] shadow-lg shadow-lime-500/20">
            <Image
              src="/cto.webp"
              alt="group of employees image"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "380px",
                maxHeight: "380px"
              }}
              sizes="100vw , (max-width: 896px) 45vw, (max-width: 1024px) 25vw"
              quality={100}
              priority={true}
              className="mx-auto w-full max-w-lg rounded-t-md"
            />
            <div className="w-full bg-gray-950 p-4">
              <h2 className="mb-1 text-lg font-bold">Engr. Lawrence Chinedu</h2>
              <h3 className="text-sm font-semibold text-lime-500">CTO</h3>
            </div>
          </div>
          {/* developer */}
          <div className="w-full max-w-[300px] shadow-lg shadow-lime-500/20">
            <Image
              src="/pm.jpeg"
              alt="group of employees image"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "380px",
                maxHeight: "380px"
              }}
              sizes="100vw , (max-width: 896px) 45vw, (max-width: 1024px) 25vw"
              quality={100}
              priority={true}
              className="mx-auto w-full max-w-lg rounded-t-md"
            />
            <div className="w-full bg-gray-950 p-4">
              <h2 className="mb-1 text-lg font-bold">Ikenna Nwachukwu</h2>
              <h3 className="text-sm font-semibold text-lime-500">Project Manager</h3>
            </div>
          </div>
        </div>
      </div>
      {/* TEAM IMAGE SECTION  END */}
    </div>
  );
};

export default TeamPage;
