import Image from "next/image";
import { Project } from "../../../../constants/projects";
export const ProjectCard = ({ project }: { project: Project }) => {
  const isCompleted = project.status === "Completed";

  return (
    <div className="bg-[#F8FAFC] rounded-3xl p-4 md:p-6 relative mb-8">
      {/* Top Right Arrow Link */}
      <button className="absolute top-6 right-6 w-10 h-10 bg-[#67B5DC] rounded-full flex items-center justify-center text-white hover:bg-[#56a4cb] transition-colors">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16663 12.8333L12.8333 1.16666M12.8333 1.16666H4.08329M12.8333 1.16666V9.91666"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Status Badge */}
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
          isCompleted
            ? "bg-[#FFEDD5] text-[#F97316]"
            : "bg-[#E0F2FE] text-[#0284C7]"
        }`}
      >
        {!isCompleted && (
          <span className="w-1.5 h-1.5 bg-[#0284C7] rounded-full animate-pulse" />
        )}
        {project.status}
      </div>

      <h2 className="text-[26px] md:text-[40px] font-bold text-[#1E293B] mb-4 leading-tight">
        {project.title}
      </h2>

      <p className="text-[#64748B] text-[14px] md:text-[16px] max-w-[1000px] mb-8 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-col-reverse gap-2 md:block ">
        {/* Stages / Stepper */}
        <div className="flex overflow-x-auto w-full gap-3 mb-6 md:flex-wrap md:overflow-visible">
          {project.stages.map((stage, index) => {
            const isFinished = index <= project.currentStageIndex;
            const isNext = index === project.currentStageIndex + 1;

            return (
              <div
                key={stage}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all flex-shrink-0 md:flex-shrink ${
                  isFinished
                    ? "bg-[#10B981] border-[#10B981] text-white -ml-5"
                    : isNext
                      ? "bg-white border-[#E2E8F0] text-[#64748B]"
                      : "bg-[#F1F5F9] border-transparent text-[#94A3B8]"
                }`}
              >
                {isFinished ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isNext ? "bg-[#67B5DC]" : "bg-transparent"}`}
                  />
                )}
                {index + 1}. {stage}
              </div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-8 gap-4 md:overflow-hidden">
          {project.images.slice(0, 8).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] w-[180px] flex-shrink-0 rounded-xl overflow-hidden group md:w-auto md:flex-shrink"
            >
              <Image
                src={img}
                alt={`Project step ${idx}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      {/* View Project CTA */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="relative cursor-pointer flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#67B5DC] text-white font-bold text-base leading-5 tracking-tight shadow-lg w-full max-w-[350px] h-12 transition-colors hover:bg-[#56a4cb]"
        >
          <span className=" left-4 top-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.71 6.66604H14.33C14.5768 6.68639 14.8077 6.54217 14.8977 6.31141C14.9877 6.08066 14.9154 5.81819 14.72 5.66604L9.17 0.216045C9.01785 0.0205986 8.75539 -0.0516846 8.52463 0.0383102C8.29388 0.128305 8.14965 0.359198 8.17 0.606045V5.17604C8.16977 5.58004 8.3336 5.9668 8.62394 6.24771C8.91428 6.52863 9.30624 6.6796 9.71 6.66604Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.54 11.526H6.97C7.15232 11.5117 7.32112 11.6229 7.38 11.796L7.98 14.686L5.25 16.686L2.54 14.616L3.15 11.836C3.19193 11.6545 3.35366 11.5259 3.54 11.526ZM5.28 14.996L6.28 13.996V13.966C6.55303 13.677 6.55303 13.2251 6.28 12.936C6.14071 12.7931 5.94959 12.7125 5.75 12.7125C5.55041 12.7125 5.35929 12.7931 5.22 12.936L4.22 13.936C3.92755 14.2289 3.92755 14.7032 4.22 14.996C4.36285 15.1332 4.552 15.2117 4.75 15.216C4.94841 15.2137 5.13828 15.1349 5.28 14.996Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.61 7.76604H14.39C14.6661 7.76604 14.89 7.9899 14.89 8.26604V15.186C14.89 17.3952 13.0991 19.186 10.89 19.186H4C1.79086 19.186 0 17.3952 0 15.186V4.02604C0 1.81691 1.79086 0.0260448 4 0.0260448H6.67C6.94391 0.0313649 7.16468 0.252136 7.17 0.526045V5.30605C7.16734 5.95583 7.42292 6.58005 7.88051 7.04139C8.3381 7.50273 8.96022 7.7634 9.61 7.76604ZM6.11 17.916L8.84 15.916C9.34181 15.5605 9.56923 14.9301 9.41 14.336L8.82 11.526C8.65191 10.6577 7.90409 10.022 7.02 9.99604H3.54C2.61826 9.97434 1.81536 10.6209 1.64 11.526L1.08 14.236C0.869958 14.8539 1.08932 15.5363 1.62 15.916L4.35 17.916C4.87294 18.3028 5.58706 18.3028 6.11 17.916Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="">View Project</span>
        </button>
      </div>
    </div>
  );
};
