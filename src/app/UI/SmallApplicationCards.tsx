import { motion } from "framer-motion";
import Image from "next/image";
import { ApplicationKeyPoints } from "../../../public/data";

interface Styles {
  styles?: string;
}

/** * 1. DEFINE THE RESPONSIVE SHAPE 
 * Original Dimensions derived from path: ~197px width x ~160.6px height
 */
const SmallCardClipPath = () => (
  <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
    <defs>
      <clipPath id="small-card-clip" clipPathUnits="objectBoundingBox">
        {/* Transformation: scale(1/197, 1/160.6) 
            => scale(0.0050761, 0.0062266)
        */}
        <path 
          d="M125 -0.98C133.837 -0.98 141 6.05 141 14.72V22.6C141 31.32 148.163 38.4 157 38.4H181C189.837 38.4 197 45.48 197 54.1V144.8C197 153.52 189.837 160.6 181 160.6H16C7.163 160.6 0 153.52 0 144.8V14.72C0 6.05 7.163 -0.98 16 -0.98H125Z" 
          transform="scale(0.0050761, 0.0062266)"
        />
      </clipPath>
    </defs>
  </svg>
);

function SmallApplicationCards({ styles }: Styles) {
  return (
    <>
      {/* 2. INJECT THE SVG DEFINITIONS */}
      <SmallCardClipPath />

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
            {/* IMPORTANT: 
               Ensure the parent container allows the shape to stretch.
               The w-full here ensures it takes the grid width.
            */}
            <div className="relative w-full h-[160px]">
              <div 
                className="relative w-full h-[160px] rounded-md p-3 overflow-hidden flex justify-items-end items-end"
                // 3. APPLY THE RESPONSIVE ID HERE
                style={{ clipPath: "url(#small-card-clip)" }} 
              >
                <Image
                  src={point.img}
                  alt={point.description}
                  fill
                  className="object-cover"
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
    </>
  );
}

export default SmallApplicationCards;