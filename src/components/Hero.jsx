import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import backgroundImage from "../assets/BackgroundImage.jpg"; 

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div
            className="border-b Oborder-neutral-900 pb-4 lg:mb-35"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", 
                height: "75vh", 
                minHeight: "75vh", 
            }}
        >
            <div className="flex flex-wrap bg-black/50"> {/* Overlay for better text visibility */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
                        >
                            LineaFlex
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            HUMAN MOTION MONITORING SYSTEM FOR ENHANCED PERFORMANCE AND WELL-BEING IN THE APPAREL INDUSTRY
                        </motion.span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    {/* Additional content goes here */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
