import { Navigations } from "../../../public/data";
import NavItem from "./NavItem";

type Props = {
  pathname: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavLinks({ pathname, open, setOpen }: Props) {
  return (
    <div className="hidden md:flex items-center justify-center">
      {Navigations.map((nav) => (
        <NavItem
          key={nav.id}
          nav={nav}
          pathname={pathname}
          open={open}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
}

export default NavLinks;