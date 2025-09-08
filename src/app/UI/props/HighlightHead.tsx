interface HighlightHeadProps {
  title: string;
}

function HighlightHead({ title }: HighlightHeadProps) {
  return (
    <span className="bg-highlight text-primary-blue py-[8px] px-[16px] text-[16px] rounded-full font-medium">
      {title}
    </span>
  );
}

export default HighlightHead;
