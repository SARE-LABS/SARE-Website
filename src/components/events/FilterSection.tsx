"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, X, Check } from "lucide-react";

interface FilterSectionProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  clearAll: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export const FilterSection = ({
  statusFilter,
  setStatusFilter,
  selectedCategories,
  toggleCategory,
  clearAll,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}: FilterSectionProps) => {
  const mainTabs = ["Upcoming Events", "Past Events"];
  const availableCategories = [
    "Webinars",
    "CTRL LABS",
    "Conferences",
    "Outreaches",
    "Product Launches",
    "Fundraisers",
    "Reporting",
  ];

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visibleCategories = showAllCategories
    ? availableCategories
    : availableCategories.slice(0, 4);

  return (
    <div className="w-full flex flex-col gap-6 py-8 border-b-[2px] border-dashed border-gray-200">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Main Tabs */}
        <div className="flex bg-[#F1F5F9] p-1.5 rounded-full overflow-x-auto w-full md:w-auto no-scrollbar shrink-0">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`flex items-center gap-1.5 px-6 py-2 rounded-full text-[14px] font-medium transition-all whitespace-nowrap ${
                statusFilter === tab
                  ? "bg-[#67B5DC] text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {statusFilter === tab && <Check size={16} />}
              {tab}
            </button>
          ))}
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="flex items-center bg-[#F1F5F9] rounded-full px-4 py-2.5 w-full sm:w-[320px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Events"
              className="bg-transparent text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none w-full ml-2"
            />
            <Search size={18} className="text-text-secondary ml-2 shrink-0" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center justify-between gap-2 text-[14px] font-medium text-text-primary bg-[#F1F5F9] rounded-full px-6 py-2.5 hover:bg-gray-200 transition-colors w-full sm:w-auto shrink-0"
            >
              {sortBy}
              <ChevronDown size={16} />
            </button>
            {isSortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-[12px] shadow-lg py-1 z-50">
                {["Newest to Oldest", "Oldest to Newest"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[14px] hover:bg-[#F1F5F9] transition-colors ${
                      sortBy === option ? "text-[#67B5DC] font-medium" : "text-text-secondary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap items-center gap-2 relative">
        <button
          onClick={clearAll}
          className="flex items-center gap-1.5 text-[14px] font-medium text-text-secondary bg-[#F1F5F9] px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors shrink-0"
        >
          <X size={14} />
          Clear All
        </button>

        <div className="flex items-center flex-wrap">
          {visibleCategories.map((category, index) => {
            const isActive = selectedCategories.includes(category);
            const prevIsActive =
              index > 0 &&
              selectedCategories.includes(visibleCategories[index - 1]);

            return (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all relative
                  ${
                    isActive
                      ? "bg-[#67B5DC] text-white border-2 border-white shadow-sm hover:brightness-110"
                      : "bg-[#F1F5F9] text-text-secondary border-2 border-transparent hover:bg-gray-200 ml-2"
                  }
                  ${isActive && prevIsActive ? "-ml-5" : isActive && !prevIsActive ? "ml-2" : ""}
                `}
                style={
                  isActive
                    ? { zIndex: visibleCategories.length - index }
                    : { zIndex: 1 }
                }
              >
                {isActive && <Check size={14} strokeWidth={3} />}
                {category}
              </button>
            );
          })}

          {availableCategories.length > 4 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="ml-2 text-[14px] font-medium text-text-secondary bg-[#F1F5F9] px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors shrink-0"
            >
              {showAllCategories ? "Show less" : "...See all"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
