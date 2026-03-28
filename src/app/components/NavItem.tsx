import Link from "next/link";
import Image from "next/image";
import { ARIghtUp, ArrowDown } from "../../../public/images/images";

type Props = {
  nav: any;
  pathname: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavItem({ nav, pathname, open, setOpen }: Props) {
  const isActive = pathname === nav.link;
  const isButton = nav.id === 5;

  const showIcon =
    isActive && [1, 2, 3, 5].includes(nav.id);

  const commonClasses = `
    flex items-center justify-center mx-4 text-[16px] rounded-3xl px-4 py-2
    transition-all duration-200
    text-text-primary hover:text-primary-blue
    ${isActive ? "bg-highlight" : ""}
  `;

  const content = (
    <>
      {showIcon && (
        <Image src={nav.icon} alt={nav.name} className="mr-2" />
      )}

      <span className="flex items-center whitespace-nowrap">
        <p className={isActive ? "text-primary-blue" : ""}>
          {nav.name}
        </p>

        {nav.id === 4 && (
          <Image
            src={ARIghtUp}
            width={16}
            height={16}
            alt="External"
            className="ml-2"
          />
        )}
      </span>

      {nav.id === 5 && (
        <Image
          src={ArrowDown}
          alt="Dropdown"
          className={`ml-2 ${open ? "rotate-180" : ""}`}
        />
      )}
    </>
  );

  if (isButton) {
    return (
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={commonClasses}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={nav.link} className={commonClasses}>
      {content}
    </Link>
  );
}

export default NavItem;