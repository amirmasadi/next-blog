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
        <Link href="/" onClick={menuHandeler}>
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
            <a
              href="https://github.com/amirmasadi/next-blog"
              target="_blank"
              className="mx-3"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 256 249"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <g fill="#fff">
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                  <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                </g>
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
