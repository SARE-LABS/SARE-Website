import Image from "next/image";
import { Apply, logoOne } from "../../../public/images/images";
import Link from "next/link";
import NavMarques from "../UI/NavMarques";

function Navbar() {
  return (
    <nav className="">
      <div className="flex items-center justify-between py-[.2rem] px-[.5rem] ">
        <Link href={"/"} className="">
          <Image src={logoOne} width={54} height={48} alt="Logo" />
        </Link>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 bg-primary-blue font-bold text-[16px] text-white p-[10px] rounded-[35px]"
        >
          <Image src={Apply} width={15} height={15} alt="Logo" />
          <p>Apply now</p>
        </Link>
      </div>
      <NavMarques />
    </nav>
  );
}

export default Navbar;
