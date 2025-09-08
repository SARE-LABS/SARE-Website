import Header from "../components/ApplicationHeader";
import Benefits from "../components/Benefits";
import Navbar from "../components/Navbar";
import WhyJoin from "../components/WhyJoin";

function page() {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyJoin />
      <Benefits />
    </div>
  );
}

export default page;
