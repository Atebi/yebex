//Home Page

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="mt-[72px]">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              Build Products That Scale On Every Device
            </h1>
            <p className="mb-6 max-w-2xl font-light text-white md:text-lg lg:mb-8 lg:text-xl">
              We are a creative group of people who design, build and ship
              amazing products and services.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-lime-500 px-5 py-3 text-center text-base font-medium text-black hover:bg-lime-700 focus:ring-4 focus:ring-lime-300"
              >
                Let's Work
                <svg
                  className="-mr-1 ml-2 h-5 w-5 fill-black"
                  // fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100"
              >
                Join Our Team
                <svg
                  className="-mr-1 ml-2 h-5 w-5 fill-white group-hover:fill-black"
                  // fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {/*  */}
          </div>
          <div className="lg:col-span-5 lg:mt-0 lg:flex">
            {/* <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
              width={0}
              height={0}
              className="w-full"
              priority={true}
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
