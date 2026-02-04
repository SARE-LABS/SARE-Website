import { useRef } from "react";

interface FilterSectionProps {
  statusFilter: string;
  setStatusFilter: (status: any) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearAll: () => void;
}

export const FilterSection = ({
  statusFilter,
  setStatusFilter,
  selectedCategories,
  toggleCategory,
  clearAll,
}: FilterSectionProps) => {
  const mainTabs = ["All", "Ongoing", "Completed"];
  const availableCategories = [
    "Environmental",
    "Analysis",
    "Social",
    "Technological",
    "Monitoring",
    "Reporting",
  ];

  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollCategories = () => {
    if (!categoriesRef.current) return;
    categoriesRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <div className="space-y-6 mb-12">
      {/* Top Row: Main Status and Search */}
      <div className="md:flex hidden flex-wrap items-center justify-between gap-4">
        <div className="flex bg-[#F1F5F9] p-1.5 rounded-full">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${
                statusFilter === tab
                  ? "bg-[#67B5DC] text-white shadow-md"
                  : "text-[#64748B] hover:text-[#1E293B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex md:flex-row  items-center gap-4">
          <div className="flex items-center gap-2 group/search">
            <button
              className="p-2 rounded-full transition-colors hover:bg-gray-100"
              aria-label="Search projects"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <div className="overflow-hidden  max-w-0 opacity-0 group-hover/search:max-w-[260px] group-hover/search:opacity-100 transition-all duration-300">
              <label
                className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full h-8 min-w-[96px] w-[242px]"
                aria-label="Search input"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748B"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects"
                  className="flex-1 bg-transparent text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                />
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#1E293B] border rounded-full px-4 py-2 bg-white cursor-pointer hover:bg-gray-50">
            Newest to Oldest
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Row: Tags */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 group/search">
              <button
                className="p-2 rounded-full md:hidden transition-colors hover:bg-gray-100"
                aria-label="Search projects"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <div className="overflow-hidden   max-w-0 opacity-0 group-hover/search:max-w-[260px] group-hover/search:opacity-100 transition-all duration-300">
                <label
                  className="flex md:hidden items-center gap-2 px-4 py-2 bg-[#F1F5F9] rounded-full h-8 min-w-[96px] w-[242px]"
                  aria-label="Search input"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search projects"
                    className="flex-1 bg-transparent text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none"
                  />
                </label>
              </div>
            </div>
            <div className="flex md:hidden items-center gap-2 text-sm font-medium text-[#1E293B] border rounded-full px-4 py-2 bg-white cursor-pointer hover:bg-gray-50">
              Newest to Oldest
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="flex md:hidden w-full min-w-0 max-w-xs sm:max-w-sm md:max-w-full overflow-x-auto no-scrollbar bg-[#F1F5F9] p-1.5 rounded-full">
            {mainTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium transition-all ${
                  statusFilter === tab
                    ? "bg-[#67B5DC] text-white shadow-md"
                    : "text-[#64748B] hover:text-[#1E293B]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={clearAll}
          className="text-sm font-medium text-[#64748B] px-4 py-2 hover:text-red-500 transition-colors"
        >
          × Clear All
        </button>

        <div
          ref={categoriesRef}
          className="flex gap-3 overflow-x-auto md:flex-wrap md:overflow-visible no-scrollbar"
        >
          {availableCategories.map((category) => {
            const isActive = selectedCategories.includes(category);
            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  isActive
                    ? "bg-[#67B5DC] border-[#67B5DC] text-white -ml-6"
                    : "bg-[#F1F5F9] border-transparent text-[#64748B] hover:border-gray-300"
                }`}
              >
                {isActive && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 3L4.5 8.5L2 6" />
                  </svg>
                )}
                {category}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={scrollCategories}
          aria-label="Scroll categories"
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] bg-white shadow-sm"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12.2805C0 12.0111 0.102456 11.7416 0.308071 11.536L5.17825 6.6665L0.308071 1.79702C-0.102456 1.38579 -0.102456 0.719124 0.308071 0.307895C0.719299 -0.102632 1.38597 -0.102632 1.7972 0.307895L7.41124 5.92194C7.82176 6.33317 7.82176 6.99983 7.41124 7.41106L1.7972 13.0251C1.38597 13.4356 0.719299 13.4356 0.308071 13.0251C0.102456 12.8195 0 12.55 0 12.2805Z"
              fill="#67B5DC"
            />
          </svg>
        </button>

        <button className="hidden md:inline-flex text-sm font-medium text-[#64748B] px-4 py-2">
          ...See all
        </button>
      </div>
    </div>
  );
};
