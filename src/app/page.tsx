"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Folder, HomeBg, Music, User } from "../../public/images/images";

function Page() {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${HomeBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-[48px] px-[2rem] md:px-[96px] md:py-[96px] min-h-[100vh] flex flex-col-reverse md:flex-row md:items-end justify-between">
     
        <motion.div
          className="flex flex-col items-start md:justify-end md:w-[700px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[48px] leading-[120%] font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Pioneering Agri-Robotics Innovation
          </motion.h1>

          <motion.p
            className="text-[18px] leading-[120%] font-[400] text-white mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Bringing together students, innovators, and leaders in Agricultural
            & Environmental Engineering to create real-world impact
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.6 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/`}
                className="flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 border border-transparent font-bold text-[16px] text-white p-[10px] rounded-[35px] cursor-pointer md:w-fit"
              >
                <Image src={User} width={15} height={15} alt="Action icon" />
                <p>Get involved</p>
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/`}
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-highlight/16 transition-all ease-in-out duration-300 border border-white font-bold text-[16px] text-white p-[10px] rounded-[35px] cursor-pointer md:w-fit"
              >
                <Image src={Folder} width={15} height={15} alt="Action icon" />
                <p>Explore Projects</p>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.button
          className="w-[48px] h-[48px] bg-highlight/16 hover:bg-highlight/10 border border-highlight rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          <Image src={Music} width={16} height={16} alt="Music icon" />
        </motion.button>
      </div>
    </header>
  );
}

export default Page;
