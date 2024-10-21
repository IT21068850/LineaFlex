import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { FaCamera } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";

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
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                
                {/* React */}
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6"> {/* Adjusted padding */}
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </div>
                    <p className="text-center mt-2">React</p>
                </motion.div>

                {/* Python */}
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <DiPython className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">Python</p>
                </motion.div>

                {/* TensorFlow */}
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <SiTensorflow className="text-7xl text-orange-400" />
                    </div>
                    <p className="text-center mt-2">TensorFlow</p>
                </motion.div>

                {/* Streamlit */}
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <SiStreamlit className="text-7xl text-red-400" />
                    </div>
                    <p className="text-center mt-2">Streamlit</p>
                </motion.div>

                {/* OpenCV */}
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <SiOpencv className="text-7xl text-blue-400" />
                    </div>
                    <p className="text-center mt-2">OpenCV</p>
                </motion.div>

                {/* Power BI */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <SiPowerbi className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">Power BI</p>
                </motion.div>

                {/* YoLo */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <FaCamera className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">YoLo</p>
                </motion.div>

                {/* RoboFlow */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <FaRobot className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">RoboFlow</p>
                </motion.div>

                {/* Microchip */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <FaMicrochip className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">Arduino</p>
                </motion.div>

                {/* Excel */}
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center">
                    <div className="rounded-2xl border-2 border-neutral-200 p-6">
                        <SiMicrosoftexcel className="text-7xl text-yellow-500" />
                    </div>
                    <p className="text-center mt-2">Excel</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
