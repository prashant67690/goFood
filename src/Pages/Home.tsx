// import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [notifications] = useState({
    heart: 2,
    bag: 0,
  });
  return (
    <>
      <div className="grid grid-cols-5  ">
        <div className="col-span-3 bg-zinc-100 z-20">
          <div className="flex justify-between ml-7">
            {" "}
            <div className="text-2xl font-semibold p-10 mt-3 ml-6">
              <a href="/">
                {" "}
                GO <strong className="font-bold">FOOD</strong>
              </a>
            </div>
            <nav className="flex space-x-4 p-10 mr-10 mt-1 ">
              <a href="#" className="text-slate-900 font-semibold m-2">
                Home{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-900 font-semibold m-2">
                Groceries{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-900 font-semibold m-2">
                Pages{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
        <div className="col-span-2 bg-green-900 z-20">
          <div className="flex justify-between  pl-8">
            <a href="/contact" className="flex m-3  p-10">
              <p className="text-white">Connect with us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-1 ml-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <div className="flex space-x-4 bg-green-900 pt-10 pr-7 mr-10">
              <div className="relative">
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white bg-opacity-20  text-white">
                  <FontAwesomeIcon icon="search" />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center justify-center w-12 h-12 rounded-full  bg-white bg-opacity-20 text-white">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center justify-center w-12 h-12 rounded-full  bg-white bg-opacity-20 text-white">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-yellow-800 bg-yellow-400 rounded-full">
                  {notifications.heart}
                </span>
              </div>
              <div className="relative">
                <button className="flex items-center justify-center w-12 h-12 rounded-full  bg-white bg-opacity-20 text-white">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </button>
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-yellow-800 bg-yellow-400 rounded-full">
                  {notifications.bag}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
