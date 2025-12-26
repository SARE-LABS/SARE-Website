import { HomeBg } from "../../../public/images/images";

function AboutHeader() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[450px]  bg-white text-white"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${HomeBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="md:text-[64px] font-bold">ABOUT SARE</h1>
      <p className="md:text-[20px] leading-[120%] text-center md:w-[700px]">
        Bringing together students, innovators, and leaders in Agricultural &
        Environmental Engineering to create real-world impact
      </p>
    </div>
  );
}

export default AboutHeader;
