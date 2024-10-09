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
          <h3 className="font-bold text-xl mb-2 text-green-800">
            Identification & Classification
          </h3>
          <p className="text-gray-700">
            There are no records of a smart solution for coconut pest and disease
            identification and classification in Sri Lanka. Symptoms of coconut
            disorders show similar characteristic appearance and therefore it is
            a challenge to provide a solution.
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
          <h3 className="font-bold text-xl mb-2 text-green-800">
            Severity Assessment
          </h3>
          <p className="text-gray-700">
            Smart solution for identification of some coconut pest and diseases
            is reported in India but assessment on severity of disease condition
            and progression level of pest damage is not attempted.
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
          <h3 className="font-bold text-xl mb-2 text-green-800">
            Information Sharing
          </h3>
          <p className="text-gray-700">
            Real time communication system to speed up information sharing
            between coconut growers, extension personals and researchers has
            been identified as priority need for effective pest and disease
            control.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchGap;
