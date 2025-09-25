import { motion } from "framer-motion";
import Image from "next/image";
import { ApplicationKeyPoints } from "../../../public/data";

interface Styles {
  styles?: string;
}

function SmallApplicationCards({ styles }: Styles) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className={`${styles ?? ""}`}
    >
      {ApplicationKeyPoints.map((point) => (
        <motion.div
          key={point.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex"
        >
          <div className="relative w-full h-[160px]">
            <div className="relative w-full h-[160px] rounded-md p-3   overflow-hidden  flex justify-items-end items-end ">
              <Image
                src={point.img}
                alt={point.description}
                fill
                className="object-cover "
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative inset-0 flex flex-col justify-between text-left ">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-white text-sm leading-3">
                    {point.description}
                  </p>
                  <h2 className="text-white text-3xl font-bold">
                    {point.figure}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SmallApplicationCards;
