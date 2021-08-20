import { motion } from "framer-motion";


const loadinAnimate = {
  initial: {
    marginBottom: "0px",
  },
  animate: {
    marginBottom: "30px",
    transition: {
      repeat: "Infinity",
      duration: 1,
    },
  },
};

export default function Loading() {

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.15 }}
        className="flex gap-2 items-end h-36"
      >
        <motion.div
          variants={loadinAnimate}
          className="bg-white w-10 h-16 rounded-t-3xl transform rotate-[120deg] translate-x-[-20px]"
        ></motion.div>

        <motion.div
          variants={loadinAnimate}
          className="bg-white w-8 h-20 rounded-md flex flex-col justify-between items-center z-10"
        >
          <div className="w-full h-3 flex flex-col justify-around items-center">
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
          </div>
          <div className="bg-gray-700 w-4/6 h-5 rounded-t-xl rounded-b-sm m-x-auto"></div>
        </motion.div>

        <motion.div
          variants={loadinAnimate}
          className="bg-white w-8 h-28 rounded-md flex flex-col justify-between items-center"
        >
          <div className="w-full h-3 flex flex-col justify-around items-center">
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
          </div>
          <div className="bg-gray-700 w-4/6 h-5 rounded-t-xl m-x-auto"></div>
        </motion.div>

        <motion.div
          variants={loadinAnimate}
          className="bg-white w-8 h-24 rounded-md flex flex-col justify-between items-center"
        >
          <div className="w-full h-3 flex flex-col justify-around items-center">
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
            <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-auto"></div>
          </div>
          <div className="bg-gray-700 w-4/6 h-5 rounded-t-xl m-x-auto"></div>
        </motion.div>

        <motion.div
          variants={loadinAnimate}
          className="bg-white w-8 h-16 rounded-md flex flex-col justify-between items-center"
        >
          <div className="bg-gray-700 w-4/6 h-1 rounded-lg m-x-auto"></div>
          <div className="bg-gray-700 w-4/6 h-5 rounded-t-xl m-x-auto"></div>
        </motion.div>
      </motion.div>
      <div className="w-80 bg-white mt-1 text-gray-700 text-center">
        لودینگ...
      </div>
    </div>
  );
}
