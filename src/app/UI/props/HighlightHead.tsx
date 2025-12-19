import Image from "next/image";
import { ARIghtBlue } from "../../../../public/images/images"

interface HighlightHeadProps {
  title: string;
}

function HighlightHead({ title }: HighlightHeadProps) {
  return (
    <span className="bg-highlight text-primary-blue py-[8px] px-[16px] text-[16px] rounded-full font-medium flex items-center justify-center gap-2 w-fit">
      <Image src={ARIghtBlue} alt="" />
      {title}
    </span>
  );
}

export default HighlightHead;
