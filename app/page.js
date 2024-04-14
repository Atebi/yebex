//Home Page

import Image from "next/image";
import Link from "next/link";
import HR from "./components/HR";
import Button from "./components/Button";
import Line from "./components/Line";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 pt-36 text-white md:pt-40 lg:px-32 xl:pt-48">
      {/* HERO */}
      <section className="">
        <div className="mx-auto grid max-w-full lg:grid-cols-12 lg:gap-8 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-9">
            <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              Build Products That Scale On Every Device
            </h1>
            <p className="mb-6 max-w-2xl font-light text-white md:text-lg lg:mb-8 lg:text-xl">
              We are a creative group of people who design, build and ship
              amazing products and services.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-6">
              <Link href="/contact">
                <Button text="Let's Work" />
              </Link>
              <Link href="/career">
                <Button mode="outline" text="Join Our Team" />
              </Link>
            </div>
            {/*  */}
          </div>
          <div className="lg:col-span-1 lg:mt-0 lg:flex">
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
      {/* HERO END */}

      <HR />

      {/* SERVICES */}
      <section className="">
        <div className="ml-auto max-w-xl text-right">
          <h3 className="mb-6 inline-flex items-center justify-center text-base font-bold text-lime-500">
            <Line />
            WHAT WE ARE
          </h3>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
            What D'Tech can do
          </h2>
          <p className="text-xl opacity-85">
            We've got everything you need to launch and grow your business
          </p>
        </div>

        {/* services container */}
        <div className="mt-24 grid grid-cols-1 gap-6 text-xl font-semibold md:grid-cols-2 xl:text-3xl">
          {/*  */}
          <div className="flex items-center gap-6 bg-neutral-900 p-6 lg:gap-10 lg:px-10 lg:py-9">
            <Image
              src="/codeLP.svg"
              alt="laptop image"
              width={0}
              height={0}
              className="h-12 w-12 fill-lime-500 lg:h-16 lg:w-16"
            />
            <h3>Software Engineering And Architecture</h3>
          </div>
          {/*  */}
          <div className="flex items-center gap-6 bg-neutral-900 p-6 lg:gap-10 lg:px-10 lg:py-9">
            <Image
              src="/migrate.svg"
              alt="Computer cloud image"
              width={0}
              height={0}
              className="h-12 w-12 fill-lime-500 lg:h-16 lg:w-16"
            />
            <h3>Cloud Migration</h3>
          </div>
          {/*  */}
          <div className="flex items-center gap-6 bg-neutral-900 p-6 lg:gap-10 lg:px-10 lg:py-9">
            <Image
              src="/data.svg"
              alt="computer data stack image"
              width={0}
              height={0}
              className="h-12 w-12 fill-lime-500 lg:h-16 lg:w-16"
            />
            <h3>Data Engineering</h3>
          </div>
          {/*  */}
          <div className="flex items-center gap-6 bg-neutral-900 p-6 lg:gap-10 lg:px-10 lg:py-9">
            <Image
              src="/file.svg"
              alt="file image"
              width={0}
              height={0}
              className="h-12 w-12 fill-lime-500 lg:h-16 lg:w-16"
            />
            <h3>Testing as a Service</h3>
          </div>
        </div>
      </section>
      {/* SERVICES END */}

      <HR />

      {/* CULTURE */}
      <section className="">
        <div className="flex flex-col gap-16 xl:flex-row xl:gap-10">
          <div className="max-w-xl">
            <h3 className="mb-6 inline-flex items-center justify-center text-base font-bold text-lime-500">
              <Line />
              OUR WAY OF WORK
            </h3>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
              Culture
            </h2>
            <p className="mb-6 text-xl opacity-85">
              Our mission is to bring happiness to a billion people. We not only
              develop products, but also the individuals, teams and the
              environment. This is why we are very conscious of our people,
              values and culture.
            </p>
            <Link href="/career">
              <Button text="Careers" />
            </Link>
          </div>

          <div className="cl_img grid grid-rows-2 grid-flow-col auto-cols gap-7">
            
            <Image
              src="/cl-1.jpeg"
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
              className="mx-auto w-full max-w-lg self-end"
            />
            <Image
              src="/cl-4.jpeg"
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
              className="mx-auto w-full max-w-lg self-start"
            />
            <Image
              src="/cl-3.jpeg"
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
              className="mx-auto w-full max-w-lg self-end"
            />
            <Image
              src="/cl-2.jpeg"
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
              className="mx-auto w-full max-w-lg self-start"
            />
          </div>
        </div>
      </section>
      {/* CULTURE END */}

      <HR />

      {/* TECH STACK */}
      <section className="">
        <div className="">
          <div className="mb-14 max-w-xl md:mb-24">
            <h3 className="mb-6 inline-flex items-center justify-center text-base font-bold text-lime-500">
              <Line /> EXPLORE OUR TECHNOLOGY
            </h3>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl xl:text-5xl">
              Tech Stack
            </h2>
            <p className="text-xl opacity-85">
              We've got everything you need to launch and grow your business
            </p>
          </div>

          <Image
            src="/techstack.webp"
            alt="tech stack image"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="100vw"
            quality={100}
            priority={true}
            className="w-full"
          />
        </div>
      </section>

      <HR />

      {/* CTA */}
      <section className="mx-auto max-w-md text-center">
        <h4 className="mb-3 text-3xl font-bold md:text-4xl">
          Getting started is easy!
        </h4>
        <p className="mx-auto mb-8 max-w-64 text-xs md:text-base">
          lorem upsumsnjhsd jjsdbjsdjksks jlbsjkskvjkkjbsfjkbknbkjbsf
        </p>
        <Button mode="outline" text="Get Started" />
      </section>

      {/* <HR /> */}
    </div>
  );
}
