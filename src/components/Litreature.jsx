import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const Litreature = () => {
    return (
        <div className="mt-40">
        <div id="Litreature" className="border-b Oborder-neutral-900 pb-4 lg:mb-35">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">
                Litreature 
                <span className="text-neutral-500">Survey</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img style={{ width: '600px', height: 'auto' }} className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <p style={{ fontSize: '12px' }} className="mt-4">[3]L. Zhang, "Applying Deep Learning-Based Human Motion Recognition System in Sports Competition," Frontiers in Neurorobotics, vol. 16, p. 12, 2022.  </p>
                    <p style={{ fontSize: '12px' }}>[4]Q. Liu, "Human motion state recognition based on MEMS sensors and Zigbee network," Computer Communications, vol. 181, 2021.</p>
                    <p style={{ fontSize: '12px' }}>[5]M. S. Prabir Jana, "RIGHT AND LEFT HAND MOTION ANALYSIS OF SEWING MACHINE OPERATOR," International Journal of Advanced Research, vol. 8, p. 14, 2020.  </p>
                    <p style={{ fontSize: '12px' }}>[6]A. M. A. R. Shujath Khan, "Real-Time Human Posture Recognition," in Journal of Emerging Technologies and Innovative Research(JETIR), 2018.  </p>
                    <p style={{ fontSize: '12px' }}>[8]Z. J. Y. L. S. C. M. W. R. S. D. W. L. Z. L. Miaoyu Li, "Sitsen: Passive sitting posture sensing based on wireless devices," Sage Journals, p. 11, 2021.  </p>
                </motion.div>
            </div >
        </div >
        </div>
  );
};

export default Litreature;
