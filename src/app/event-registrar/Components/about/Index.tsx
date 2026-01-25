import { Carousel } from "../carousel/Index";
import { Tags } from "./Tags";

export const About = () => {
  return (
    <div className="w-full h-max flex flex-col mt-12 gap-4">
      <h1 className="font-medium w-max text-[28px] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">
        About the Event
      </h1>
      <div className="text-[15px]">
        <p>
          “The Missing Link” is a beginner-friendly online workshop designed to
          help you finally understand how parts actually work together in CAD,
          not just how they look.
        </p>
        <p>
          If you’ve ever modeled parts in Fusion 360 but got stuck when trying
          to assemble them, animate motion, or make designs behave like real
          machines, this session is for you. <br />
          <br />
          We’ll break down the most important (and most misunderstood) concepts
          in Fusion 360, joints and relations, and show you how to use them
          properly to create functional, realistic designs.
        </p>
        <p className="mt-4">During the session, we’ll cover how to:</p>
      </div>
      <Tags />
      <p>
        Whether you’re new to CAD, into robotics, or tired of designs that fall
        apart the moment you try to assemble them — this workshop bridges that
        gap.
      </p>
      <Carousel />
    </div>
  );
};
