import AboutHeader from "@/components/AboutHeader";
import { EventsImg } from "../../../public/images/pngs/png";
import Hero from "@/components/events/Hero";

import Events from "@/components/events/Events";
import FAQs from "@/components/FAQs";
import Newsletter from "@/components/Newsletter";

function page() {
  return (
    <div>
      <AboutHeader
        img={EventsImg}
        title="EVENTS & ACTIVITIES"
        description="Bringing together students, innovators, and leaders in Agricultural & Environmental Engineering to create real-world impact"
      />
      <Hero />
      <Events />
      <FAQs />
      <Newsletter />
    </div>
  );
}

export default page;
