import { motion } from "framer-motion";
import React from 'react';

// Icons as React Components (Can also use other icon libraries)
const IdentificationIcon = () => (
  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
      />
    </svg>
  </div>
);

const SeverityIcon = () => (
  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5-9 5-9-5 9-5z"
      />
    </svg>
  </div>
);

const InformationSharingIcon = () => (
  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  </div>
);

const ResearchGap = () => {
  return (
    <div id="ResearchGap" className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Research <span className="text-neutral-500">Gap</span>
      </motion.h2>

      {/* Research Gaps Section */}
      <div className="flex justify-center space-x-8">
        {/* Card 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <IdentificationIcon />
          <h3 className="font-bold text-xl mb-2 text-green-700">
              Real-Time Monitoring in Apparel Manufacturing
          </h3>
          <p className="text-gray-500">
          Current systems for monitoring hand movements and posture in the apparel industry lack real-time feedback, making it difficult to correct mistakes promptly.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <SeverityIcon />
          <h3 className="font-bold text-xl mb-2 text-green-700">
              Lack of Personalized Skill Training
          </h3>
          <p className="text-gray-500">
          Existing training programs for sewing operators are not tailored to individual skill levels. This research aims to fill this gap by leveraging machine learning to offer personalized feedback and skill prediction, fostering more effective and targeted training.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.4 }}
          className="flex flex-col items-center text-center max-w-xs"
        >
          <InformationSharingIcon />
          <h3 className="font-bold text-xl mb-2 text-green-700">
          Advanced Technologies for Data-Driven Decision Making
          </h3>
          <p className="text-gray-500">
          Many apparel manufacturing systems do not fully utilize machine learning, computer vision, and sensor fusion to analyze hand movements and posture data. This gap underscores the potential for data-driven insights to optimize both worker performance and production quality, which this research aims to address.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchGap;
