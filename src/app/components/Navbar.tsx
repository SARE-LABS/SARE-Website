import Image from "next/image";
import { Apply, logoOne, logoTwo } from "../../../public/images/images";
import Link from "next/link";
import NavMarques from "../UI/NavMarques";

function Navbar() {
  return (
    <nav className="">
      <div className="flex items-center justify-between py-[.2rem] px-[.5rem] md:px-[76px] ">
        <Link href={"/"} className={``}>
          <Image src={logoOne} width={54} height={48} alt="Logo" className="md:hidden" />
          <Image src={logoTwo} width={200} height={48} alt="Logo" className="hidden md:block bg-ed-400"/>
        </Link>
        <button
          className="cursor-pointer md:w-[20%] flex items-center justify-center gap-2 bg-primary-blue font-bold text-[16px] text-white p-[10px] rounded-[35px]"
        >
          <Image src={Apply} width={15} height={15} alt="Logo" />
          <p>Apply now</p>
        </button>
      </div>
      <NavMarques />
    </nav>
  );
}

export default Navbar;
