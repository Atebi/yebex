import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import Line from "./Line";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-36 bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 lg:px-32">
        {/* FLEX CONTAINER START */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:justify-between">
          {/* CONTACT */}
          <div className="max-w-xs">
            <h2 className="mb-8 text-2xl font-semibold text-black">Contact</h2>
            <ul className="text-lg text-gray-700">
              <li className="mb-6 inline-flex items-center justify-center gap-6">
                <Image
                  src="/street.svg"
                  alt="Street icon"
                  width={14}
                  height={14}
                />
                No. 15, Irewole Street, Ikeja, Lagos
              </li>
              <li className="mb-6 inline-flex items-center justify-center gap-6">
                <Image
                  src="/email.svg"
                  alt="Email icon"
                  width={20}
                  height={20}
                />
                yebox.io@gmail.com
                <br />
                hello@yebox.io
              </li>
              <li className="mb-6 inline-flex items-center justify-center gap-6">
                <Image
                  src="/phone.svg"
                  alt="Phone icon"
                  width={32}
                  height={32}
                />
                +23481 1037 7770 <br />
                +23470 3872 9995
              </li>
            </ul>
          </div>
          {/* CONTACT END */}

          {/* NEWSLETTER, SOCIAL ICONS AND LOGO SECTION */}
          <div className="mb-6 md:mb-0">
            {/* NEWSLETTER SIGN-UP */}
            <div className="">
              <h2 className="mb-8 text-2xl font-medium text-black">
                Signup for our Newsletter
              </h2>
              <NewsletterForm />
            </div>
            {/* NEWSLETTER END */}

            {/* SOCIAL ICONS DIV */}
            <div className="mt-12 flex gap-7">
              <Link href="#" className="hover:opacity-60">
                <Image
                  src="/facebook.svg"
                  alt="Facebook Logo"
                  width={40}
                  height={40}
                />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="#" className="hover:opacity-60">
                <Image src="/x.svg" alt="X Logo" width={40} height={40} />
                <span className="sr-only">Twitter-X page</span>
              </Link>
              <Link href="#" className="hover:opacity-60">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={40}
                  height={40}
                />
                <span className="sr-only">Instagram page</span>
              </Link>
              {/*  */}
            </div>
            {/* SOCIAL ICONS END */}

            <Link href="/" className="mt-16 flex items-center">
              <Image
                src="/yebox.svg"
                alt="Yebex Logo"
                width={0}
                height={0}
                className="me-3 h-14 w-auto"
              />
              {/* <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Flowbite
              </span> */}
            </Link>
          </div>
          {/* END OF NEWSLETTER, SOCIAL ICONS AND LOGO */}
        </div>
        {/* FLEX CONTAINER END */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-gray-500 opacity-80 sm:text-center">
            © {currentYear}{" "}
            <Link href="/" className="hover:underline">
              Yebox™
            </Link>{" "}
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
