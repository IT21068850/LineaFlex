import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
     },
    },
});

const Technologies = () => {
    return (
        <div id="Technologies" className="border-b Oborder-neutral-800 pb-24">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <DiPython className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <SiTensorflow className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <SiStreamlit className="text-7xl text-red-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <SiOpencv className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <SiPowerbi className="text-7xl text-yellow-500" />
                </motion.div>
                {/* <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 Oborder-neutral-800 p-4">
                    <SiOracle className="text-7xl text-red-600" />
                </motion.div> */}

                
            </motion.div>
        </div>
    );
};

export default Technologies;
