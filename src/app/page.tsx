import Glance from "./components/Glance";
import Header from "./components/Header";
import Problem from "./components/Problem";

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
    </div>
  );
}

export default Page;
