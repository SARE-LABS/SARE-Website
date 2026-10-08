interface TagsProps {
  tags?: string[];
  className?: string;
}

const DEFAULT_TAGS = [
  "From Learning to Building",
  "INNOVATION",
  "SHOWCASE",
  "CONNECTION",
  "CONTINUITY",
];

export const Tags = ({ tags = DEFAULT_TAGS, className = "" }: TagsProps) => {
  return (
    <div className={`flex flex-wrap items-center gap-2 md:gap-3 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="py-1 px-3.5 border border-[#67B5DC] bg-white/70 hover:bg-[#67B5DC]/10 text-[#1F2937] text-[12px] font-medium tracking-wide rounded-full shadow-xs transition-colors duration-200 select-none"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
