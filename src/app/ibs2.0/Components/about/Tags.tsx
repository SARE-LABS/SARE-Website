export const Tags = () => {
  const tags = [
    "Build with Purpose",
    "Break Barriers",
    "Automate for Impact",
    "Think Entrepreneurially",
    "Collaborate for Success",
  ];
  return (
    <div className="flex gap-4 flex-col md:flex-row md:flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="py-1 px-4 border-2 border-[#67B5DC] rounded-full w-max text-[12px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
