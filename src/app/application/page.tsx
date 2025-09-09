import AnimationBg from "../components/AnimationBg";
import Header from "../components/ApplicationHeader";
import Benefits from "../components/Benefits";
import FAQs from "../components/FAQs";
import Join from "../components/Join";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import WhyJoin from "../components/WhyJoin";

function page() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Header />
      <WhyJoin />
      <Benefits />
      <AnimationBg />
      <Join />
      <FAQs />
      <Newsletter />
    </div>
  );
}

export default page;
