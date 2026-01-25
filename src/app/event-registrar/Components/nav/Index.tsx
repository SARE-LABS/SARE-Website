import Image from "next/image"
import { SAREFullLogo } from "../../public/public"

export const Nav = () => {
  return (
    <nav className={`bg-[#F3F4F6] flex w-full justify-between items-center h-[80px] md:px-16 md:py-12 px-4 py-4 sticky top-0 z-50`}>
        <div className="w-max h-max">
            <Image src={SAREFullLogo} alt="SARE Logo" className="w-[14rem] md:w-full" />
        </div>
        <div className="w-max h-max rounded-full bg-[#FFFFFF] p-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
        </div>
    </nav>
  )
}
