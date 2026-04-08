import EventsFaq from "../components/EventsActivities/EventsFaq";
import EventsFeed from "../components/EventsActivities/EventsFeed";
import EventsHero from "../components/EventsActivities/EventsHero";
import ExploreMoreEvents from "../components/EventsActivities/ExploreMoreEvents";
import FeaturedEvent from "../components/EventsActivities/FeaturedEvent";
import ExploreMore from "../components/ExploreMore";
import FAQs from "../components/FAQs";
import Newsletter from "../components/Newsletter";
import { ExploreSection } from "../components/Projects/ExploreSection";

export default function EventsAndActivitiesPage() {
  return (
    <main className="w-full min-h-[100vh] bg-[#F3F6FA] pt-[88px] md:pt-[104px] pb-10">
      <EventsHero />
      <FeaturedEvent />
      <EventsFeed />
      {/* <ExploreMoreEvents /> */}
      {/* <ExploreMore /> */}
      <ExploreSection />
      <FAQs />
   
      <Newsletter />
    </main>
  );
}
