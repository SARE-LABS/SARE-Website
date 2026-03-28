import Image from "next/image";
import { Apply, User } from "../../../public/images/images";

type Props = {
  pathname: string;
  onClick: () => void;
};

function ApplyButton({ pathname, onClick }: Props) {
  const isApplicationPage = pathname === "/application";

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-primary-blue hover:bg-primary-blue-hover
      transition-all duration-300 font-bold text-[16px] text-white p-2.5
      rounded-[35px]"
    >
      <Image
        src={!isApplicationPage ? User : Apply}
        width={15}
        height={15}
        alt="Action icon"
      />
      <p>{!isApplicationPage ? "Get involved" : "Apply now"}</p>
    </button>
  );
}

export default ApplyButton;