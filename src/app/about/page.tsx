import AboutHeader from "../components/AboutHeader";
import AboutUs from "../components/AboutUs";
import FutureOrientedStats from "../components/FutureOrientedStats";
import Mission from "../components/Mission";
import MissionVision from "../components/MissionVision";
import OurJourneySoFar from "../components/OurJourneySoFar";
import Partners from "../components/Partners";
import Problem from "../components/Problem";
import Social from "../components/Social";
import TheTeam from "../components/TheTeam";
import Vision from "../components/Vision";

function page() {
  return (
    <div className="w-full min-h-[100vh] overflow-hidden scroll-smooth ">
      <AboutHeader />
      <Problem />
      <Mission />
      <Vision />
      <FutureOrientedStats />
      <OurJourneySoFar />
      <TheTeam />
      <Social />
      <Partners />
    </div>
  );
}

export default page;
