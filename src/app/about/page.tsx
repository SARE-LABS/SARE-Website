import AboutHeader from "../components/AboutHeader";
import AboutUs from "../components/AboutUs";
import FutureOrientedStats from "../components/FutureOrientedStats";
import MissionVision from "../components/MissionVision";
import OurJourneySoFar from "../components/OurJourneySoFar";
import Partners from "../components/Partners";
import Social from "../components/Social";
import TheTeam from "../components/TheTeam";

function page() {
  return (
    <div className="w-full min-h-[100vh] overflow-hidden scroll-smooth ">
      <AboutHeader />

      <AboutUs />
      <MissionVision />
      <FutureOrientedStats />
      <OurJourneySoFar />
      <TheTeam />
      <Partners />
      <Social />
    </div>
  );
}

export default page;
