import { motion } from "framer-motion";
import React from "react";


const StarIcon = () => (
  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.254 6.936a1 1 0 00.95.69h7.142c.96 0 1.357 1.23.588 1.81l-5.787 4.287a1 1 0 00-.363 1.118l2.254 6.936c.3.921-.755 1.688-1.54 1.118l-5.787-4.287a1 1 0 00-1.176 0l-5.787 4.287c-.785.57-1.84-.197-1.54-1.118l2.254-6.936a1 1 0 00-.363-1.118l-5.787-4.287c-.769-.58-.372-1.81.588-1.81h7.142a1 1 0 00.95-.69l2.254-6.936z"
      />
    </svg>
  </div>
);

const ResearchObjective = () => {
  const objectives = [
    {
      title: "Classification of Weligama Coconut Leaf Wilt Disease",
      description:
        "The first objective is to classify Weligama Coconut Leaf Wilt Disease (WCLWD) to provide a solution for distinguishing WCLWD uneven yellowing from other diseases. In addition, the symptom severity of WCLWD was determined using a Convolutional Neural Network to identify the disease's symptom severity level to inform the Coconut Research Institute of Sri Lanka (CRISL) to proceed with the necessary precautions to reduce the dispersion rate.",
    },
    {
      title: "Classification of Coconut Caterpillar Infestation",
      description:
        "The second objective of this study is to develop a solution to identify the coconut caterpillar infestation (CCI) while differentiating its symptoms from other conditions. The severity of the infestation will also be determined at the same time, and appropriate authorities will be notified in order to expedite the application of control measures to prevent possible outbreak of the pest.",
    },
    {
      title:
        "Differentiating Magnesium Deficiency, Coconut Leaf Scorching, and Identify Water Resources",
      description:
        "The third objective is identifying the pattern of yellowing associated with Mg deficiency, identifying LSD on coconut leaves, and check whether there is a water resource within 100m from the farmers to facilitate constant monitoring to prevent caterpillar outbreaks.",
    },
    {
      title: "Crowdsourcing for information sharing",
      description:
        "The fourth objective is to provide a convenient approach to the farmers and industry professionals to utilize the optimal use of the platform by visualizing the disease dispersions and notifying the stakeholders regarding the dispersions with their severity levels.",
    },
  ];

  return (
    <div id="ReserachObjective" className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Research <span className="text-neutral-500">Objectives</span>
      </motion.h2>

      <div className="relative space-y-8">
        {objectives.map((objective, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            key={index}
            className="relative p-6 border border-gray-300 rounded-lg shadow-md bg-white flex"
          >
            {/* Icon on the left side */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
              <StarIcon />
            </div>

            {/* Card Content */}
            <div className="ml-16">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                {objective.title}
              </h3>
              <p className="text-gray-600">{objective.description}</p>
            </div>

            {/* Connecting Line */}
            {index < objectives.length - 1 && (
              <div className="absolute left-4 bottom-0 h-full w-px bg-green-400"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResearchObjective;
