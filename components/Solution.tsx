import React from "react";
import { StickyScroll } from "./StickyScroll";

const Solution = () => {
  return (
    <div className="flex flex-col py-[6rem] md:px-[6rem] px-6">
      <div className="flex md:flex-row flex-col justify-between items-start">
        <div className="flex flex-col gap-4 w-full md:w-[50%]">
          <h1 className="md:text-4xl text-3xl md:max-w-[85%] font-medium">
            What we do
          </h1>
          <p className="text-neutral-600 text-sm max-w-md">
            <span className="text-black font-medium">
              Scooter brings structure, signal, and science to the point where
              sales hiring breaks down.
            </span>{" "}
            We replace resumes and gut-feel interviews with a structured,
            screening layer — built on behavioral science. You get the full
            picture of a candidate before the first call.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[50%] h-screen z-10">
          <h1 className="md:text-3xl text-2xl font-semibold">How it works</h1>
       </div>
      </div>

    </div>
  );
};

export default Solution;
