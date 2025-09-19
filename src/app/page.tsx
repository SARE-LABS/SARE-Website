import Discovery from "./components/Discovery";
import Glance from "./components/Glance";
import Header from "./components/Header";
import Problem from "./components/Problem";
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
    </div>
  );
}

export default Page;
