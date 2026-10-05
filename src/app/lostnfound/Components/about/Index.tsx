import {
  Bot,
  Sparkles,
  Zap,
  Gamepad2,
  Trophy,
  Users,
  CheckCircle2,
  Cpu,
  Radio,
} from "lucide-react";
import { Carousel } from "../carousel/Index";
import { Tags } from "./Tags";

interface EventFeature {
  title: string;
  description: string;
  icon: typeof Bot;
  badge?: string;
}

const EVENT_FEATURES: EventFeature[] = [
  {
    title: "The Grand Build Project",
    description:
      "Collaborative live build of a remote-controlled bomb-disposal robot equipped with precision robotic arm manipulation.",
    icon: Bot,
    badge: "Main Project",
  },
  {
    title: "Keynote Session",
    description:
      "Inspiring perspectives and practical insights delivered by seasoned professionals and tech innovators.",
    icon: Sparkles,
  },
  {
    title: "Live Robotics Demonstrations",
    description:
      "Experience practical robotics and embedded systems in action with working automated prototypes.",
    icon: Zap,
  },
  {
    title: "Interactive Games & Activities",
    description:
      "Participate in hands-on engineering challenges, tech trivia, and interactive robotics games.",
    icon: Gamepad2,
  },
  {
    title: "Student Showcase",
    description:
      "Celebrate student-built creations, embedded solutions, and 3D design achievements from the cohort.",
    icon: Trophy,
  },
  {
    title: "Networking & Community Engagement",
    description:
      "Connect and collaborate with fellow builders, aspiring engineers, mentors, and technology leaders.",
    icon: Users,
  },
];

const OPPORTUNITIES: string[] = [
  "See students turn ideas into working robots.",
  "Experience practical robotics and automation in action.",
  "Learn from innovators and professionals in the technology space.",
  "Connect with students, builders, engineers, and young innovators.",
  "Celebrate the journey and everything CTRL LABS has built so far.",
];

export const About = () => {
  return (
    <section
      aria-labelledby="about-event-heading"
      className="w-full flex flex-col mt-14 md:mt-20 gap-8 md:gap-12"
    >
      <div className="flex flex-col gap-3">
        <h2
          id="about-event-heading"
          className="font-medium w-max text-[28px] md:text-[32px] text-[#1F2937] before:w-[75%] before:h-[4px] before:rounded-full before:bg-[#67B5DC] relative before:absolute before:top-[100%]"
        >
          About the Event
        </h2>
        <p className="text-[#4B5563] text-sm md:text-base font-normal mt-2">
          CTRL LABS Grand Finale: Bringing theory to life through hands-on
          robotics, automation, and innovation.
        </p>
        <Tags className="mt-1" />
      </div>

      {/*  Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#4B5563] text-[15px] md:text-[17px] leading-relaxed">
        <div className="bg-white/80 p-5 md:p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
          <p>
            The Grand Finale is the culmination of our hands-on robotics,
            embedded systems, automation, and 3D design activities. It brings
            together students, young innovators, and technology enthusiasts to
            celebrate what we have built, learned, and explored throughout the
            session.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#67B5DC]">
            <span>Culmination of Hands-on Learning</span>
          </div>
        </div>

        <div className="bg-white/80 p-5 md:p-6 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col justify-between">
          <p>
            Over the course of CTRL LABS, students have moved beyond theory to
            design, build, test, break, fix, and build again. The Grand Finale
            is where all of that comes together, with an exciting day of
            practical building, learning, interaction, and celebration.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0FC99F]">
            <span>Design • Build • Test • Iterate</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white border border-[#67B5DC]/40 shadow-sm p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#67B5DC]/15 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#67B5DC]/15 text-[#1F2937] font-semibold text-xs tracking-wider uppercase">
              <Cpu className="w-3.5 h-3.5 text-[#67B5DC]" />
              Grand Build Project
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0FC99F]/15 text-[#0a8c6e] font-medium text-xs">
              <Radio className="w-3 h-3" />
              Flagship Robotics Showcase
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#1F2937]">
            Remote-Controlled Bomb-Disposal Robot
          </h3>

          <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
            The highlight of the event will be our Grand Build Project, where
            participants will work on a remote-controlled bomb-disposal robot
            equipped with a robotic arm for remote interaction and manipulation.
            The project challenges students to apply what they have learned
            while exploring robotics, automation, control, and problem-solving
            in a practical, real-world setting.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Robotic Arm Manipulation",
              "Remote Teleoperation",
              "Embedded Systems",
              "Sensors & Actuators",
              "3D Mechanical Design",
            ].map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-[#F3F4F6] text-[#4B5563] font-medium hover:bg-[#67B5DC]/10 transition-colors"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* What to Expect  */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937]">
            What&apos;s In Store
          </h3>
          <p className="text-sm md:text-base text-[#4B5563]">
            Explore the line-up of activities, showcases, and interactive
            sessions planned for the day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVENT_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-[#67B5DC] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#67B5DC]/15 text-[#67B5DC] flex items-center justify-center group-hover:bg-[#67B5DC] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {feature.badge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#67B5DC] bg-[#67B5DC]/10 px-2.5 py-0.5 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold text-base text-[#1F2937]">
                    {feature.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Attend / Key Opportunities */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937]">
            Don&apos;t Miss This Opportunity To:
          </h3>
          <p className="text-sm md:text-base text-[#4B5563]">
            Key takeaways for students, builders, engineers, and tech
            enthusiasts attending the event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {OPPORTUNITIES.map((detail, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#67B5DC]/60 hover:shadow-xs transition-all duration-200"
            >
              <div className="mt-0.5 rounded-full p-1 bg-[#0FC99F]/15 text-[#0FC99F] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-sm md:text-[15px] font-medium text-[#1F2937] leading-snug">
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Flyers */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col items-center text-center gap-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#67B5DC]">
            Event Media
          </span>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937]">
            Official Flyers & Highlights
          </h3>
        </div>
        <Carousel />
      </div>
    </section>
  );
};
