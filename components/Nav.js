import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function Nav() {
  const [menuToggle, setmenuToggle] = useState(false);

  function menuHandeler() {
    setmenuToggle(!menuToggle);
  }

  return (
    <nav
      style={{ fontSize: "18px" }}
      className="bg-gray-700 flex lg:flex-col lg:h-full w-full lg:w-16 justify-between items-center fixed right-0 top-0 px-8 lg:px-0 py-2 lg:py-8 text-white text-3xl font-light z-40"
    >
      <Link href="/" className="w-[80%]">
        <a>
          <Image src="/bz-logo.png" width="50px" height="50px" />
        </a>
      </Link>

      {!menuToggle ? (
        <MenuAlt4Icon
          className="
          w-8 cursor-pointer active:text-gray-300 z-10 text-white"
          onClick={menuHandeler}
        />
      ) : (
        <XIcon
          className="
       w-8 cursor-pointer active:text-gray-300 z-10 text-white"
          onClick={menuHandeler}
        />
      )}

      <div className="hidden lg:block"></div>

      <div
        className={`bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col items-center justify-around absolute top-0 right-0 
        h-[100vh]  lg:h-full w-full lg:w-[30vw] px-5 transform ${
          menuToggle ? "translate-x-0" : "translate-x-[1000px]"
        } transition duration-1000 ease-out text-white`}
      >
        <Link href="/"  onClick={menuHandeler} >
          <a className="flex items-center">
            <span className="font-black text-[30px] ml-3">bloge ziba</span>
            <Image src="/bz-logo.png" width="70px" height="70px" />
          </a>
        </Link>

        <div className="w-[80%]">
          <p className="text-center font-black">تماس</p>
          <ContactForm />
        </div>

        <div className="text-center text-gray-300">
          <div className="flex justify-center">
            <a href="https://heroicons.com/" targer="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="7.025 7.025 497.951 497.95"
              >
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="-974.482"
                  y1="1306.773"
                  x2="-622.378"
                  y2="1658.877"
                  gradientTransform="translate(1054.43 -1226.825)"
                >
                  <stop offset="0" stopColor="#2489be" />
                  <stop offset="1" stopColor="#0575b3" />
                </linearGradient>
                <path
                  d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                  fill="url(#a)"
                  style={{ fill: "#fff" }}
                />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/amirasadi2001/_saved/"
              target="_blank"
              className="mx-3"
            >
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 360"
                width="25"
                height="25"
              >
                <path
                  className="st0"
                  d="M354.7 179.5c0 96.8-78.5 175.3-175.3 175.3-96.8 0-175.3-78.5-175.3-175.3C4.1 82.7 82.6 4.2 179.4 4.2c96.8 0 175.3 78.5 175.3 175.3z"
                  style={{ fill: "#fff" }}
                />
                <path
                  className="st1"
                  d="M164.7 62.9c-49.4 5.3-98.6 43.3-100.6 97.7-1.3 33.2 12.6 58.1 45.8 65.1 3.8-15.7 4.5-24.2 4.5-24.2s-14.6-14-16.1-22.9C86.1 107 185 58.1 236.9 108.1c35.8 34.7 12.2 141.4-45.6 130.3-55.4-10.6 27.1-95.5-17.1-112.2-35.9-13.6-55 41.5-38 68.8-10 47-31.5 91.3-22.8 150.2 28.3-19.5 37.8-56.9 45.6-95.9 14.2 8.2 21.8 16.8 39.9 18.1 66.8 4.9 104.1-63.5 95-126.7-8.2-56-66.8-84.5-129.2-77.8z"
                  style={{ fill: "#4b5563" }}
                />
              </svg>
            </a>
          </div>
          <div className="mt-5">
            copyright 2021{" "}
            <a
              href="https://jobinja.ir/user/Amirasadi"
              target="_blank"
              className="underline"
            >
              amir asadi
            </a>
            &copy;
          </div>
        </div>
      </div>
    </nav>
  );
}
