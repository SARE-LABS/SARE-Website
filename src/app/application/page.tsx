import AnimationBg from "../components/AnimationBg";
import Header from "../components/ApplicationHeader";
import Benefits from "../components/Benefits";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import WhyJoin from "../components/WhyJoin";

function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyJoin />
      <Benefits />
      <AnimationBg />
      <Join />
    </div>
  );
}

export default page;
