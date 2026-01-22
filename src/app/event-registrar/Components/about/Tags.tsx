export const Tags = () => {
  const tags = [
    "Create and apply joints the right way in Fusion 360",
    "Understand joint types and when to use each one",
    "Build assemblies that move realistically",
    "Avoid common mistakes that break assemblies",
    "Think like an engineer, not just a modeler",
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
