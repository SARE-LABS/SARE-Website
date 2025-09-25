import Deployment from "./components/Deployment";
import Discovery from "./components/Discovery";
import ExploreMore from "./components/ExploreMore";
import FAQs from "./components/FAQs";
import FieldTesting from "./components/FieldTesting";
import Glance from "./components/Glance";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Problem from "./components/Problem";
import Prototyping from "./components/Prototyping";
import ResearchandIdeation from "./components/ResearchandIdeation";

function Page() {
  return (
    <div>
      <div className="  top-0 z-10">
        <Header />
      </div>
      <div className="  top-0 z-[100]">
        <Problem />
      </div>
      <div className="  top-0 z-[50]">
        <Glance />
      </div>
      <div className="  top-0 z-[100]">
        <Discovery />
      </div>
      <div className="  top-0 z-[100]">
        <ResearchandIdeation />
      </div>
      <div className="  top-0 z-[100]">
        <Prototyping />
      </div>
      <div className="  top-0 z-[100]">
        <FieldTesting />
      </div>
      <div className="  top-0 z-[100]">
        <Deployment />
      </div>
      <div className="">
        <ExploreMore />
      </div>
      <div>
        <FAQs colour="bg-background-page" />
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
}

export default Page;
