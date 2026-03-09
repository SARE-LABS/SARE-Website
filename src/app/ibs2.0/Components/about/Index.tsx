import { Carousel } from "../carousel/Index";
import { Tags } from "./Tags";

export const About = () => {
  const details = [
      "Connect with industry leaders and fellow innovators.",
      "Learn cutting-edge techniques in robotics and AI.",
      "Be Inspired by real-world applications and success stories.",
      "Network for future collaborations and career opportunities."
  ]
  return (
    <div className="w-full h-max flex flex-col mt-12 gap-4">
      <h1 className="font-medium w-max text-[28px] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]">
        About the Event
      </h1>
      <div className="text-[15px]">
        <p>
          The CTRL LABS Icebreaker Session 2.0 is SARE's flagship event designed to ignite the spark of innovation in aspiring engineers and problem-solvers. This year, we delve into the core philosophy of "Take CTRL of Innovation: Build. Break. Automate."
        </p>
        <p>
          This session is a unique opportunity to connect with leading minds in robotics and AI, gain practical insights, and network with fellow student innovators. Whether you're new to robotics, an experienced coder, or an aspiring entrepreneur, this event will challenge your perspectives and equip you with the mindset to transform ideas into impactful solutions. <br />
          <br />
          We believe true innovation comes from understanding how to Build robust systems, daring to Break conventional boundaries, and mastering the art of Automate complex processes. Join us to explore how these principles are driving the future of agriculture and environmental technology.
        </p>
        <p className="mt-4">During the session, we’ll cover how to:</p>
      </div>
      <Tags />
      <h1>Don't miss this opportunity to:</h1>
        <ul className="list-disc list-inside mt-2">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      <Carousel />
    </div>
  );
};
