'use client'

import { useState, useMemo, useEffect } from "react";
import { ProjectsHero } from "../components/Projects/ProjectsHero";
import { FilterSection } from "../components/Projects/FilterSection";
import { ProjectCard } from "../components/Projects/ProjectCard";
import { PROJECTS, ProjectStatus } from "../../../constants/projects";
import { ExploreSection } from "../components/Projects/ExploreSection";
import { FAQSection } from "../components/Projects/FAQSection";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function ProjectsPage() {
  const INITIAL_VISIBLE_COUNT = 2;
  const LOAD_MORE_STEP = 2;
  
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | "All">("All");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Reset when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [statusFilter, selectedCategories]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesStatus = statusFilter === "All" || project.status === statusFilter;
      const matchesCategory = 
        selectedCategories.length === 0 || 
        project.categories.some(cat => selectedCategories.includes(cat));
      return matchesStatus && matchesCategory;
    });
  }, [statusFilter, selectedCategories]);

  // Derived state to check if we are showing everything
  const isFullyExpanded = visibleCount >= filteredProjects.length;

  const projectsToDisplay = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Toggle Function
  const handleToggleMore = () => {
    if (isFullyExpanded) {
      // Scroll back up to the project start smoothly when collapsing
      window.scrollTo({ top: 600, behavior: 'smooth' });
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    } else {
      setVisibleCount(prev => prev + LOAD_MORE_STEP);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <ProjectsHero />

      <div className="max-w-[1400px] mx-auto px-[48px]">
        <FilterSection 
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          selectedCategories={selectedCategories}
          toggleCategory={toggleCategory}
          clearAll={() => { setStatusFilter("All"); setSelectedCategories([]); }}
        />

        <div className="space-y-12">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
             <div className="text-center py-20 text-gray-400">No projects found.</div>
          )}
        </div>

        {/* This button stays visible as long as there's more than INITIAL_VISIBLE_COUNT items */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={handleToggleMore}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-[#F1F5F9] text-[#64748B] font-semibold hover:bg-[#67B5DC] hover:text-white transition-all duration-300"
            >
              {isFullyExpanded ? "See less" : "See more"}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className={`transition-transform duration-300 ${isFullyExpanded ? "rotate-180" : "group-hover:translate-y-1"}`}
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
      <ExploreSection />
      <FAQSection />
      <Newsletter/>
    </div>
  );
}