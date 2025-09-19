import Deployment from "./components/Deployment";
import Discovery from "./components/Discovery";
import ExploreMore from "./components/ExploreMore";
import FieldTesting from "./components/FieldTesting";
import Glance from "./components/Glance";
import Header from "./components/Header";
import Problem from "./components/Problem";
import Prototyping from "./components/Prototyping";
import ResearchandIdeation from "./components/ResearchandIdeation";

function Page() {
  return (
    <div>
      <div className=" sticky top-0 z-10">
        <Header />
      </div>
      <div className=" sticky top-0 z-[100]">
        <Problem />
      </div>
      <div className=" sticky top-0 z-[100]">
        <Glance />
      </div>
      <div className=" sticky top-0 z-[100]">
        <Discovery />
      </div>
      <div className=" sticky top-0 z-[100]">
        <ResearchandIdeation />
      </div>
      <div className=" sticky top-0 z-[100]">
        <Prototyping />
      </div>
      <div className=" sticky top-0 z-[100]">
        <FieldTesting />
      </div>
      <div className=" sticky top-0 z-[100]">
        <Deployment />
      </div>
      <div className=" relativ top-0 z-[100]">
        <ExploreMore />
      </div>
    </div>
  );
}

export default Page;
