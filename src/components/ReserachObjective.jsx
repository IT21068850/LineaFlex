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
      title: "Detect Target Employee",
      description:
        "This component aims to improve human motion detection in the apparel industry by creating an intelligent system. We will optimize camera placement for complete coverage of workspaces and include obstacle detection to avoid issues that hinder accurate motion capture. By using advanced algorithms and technologies, we want to enhance the accuracy and efficiency of monitoring processes. Ultimately, this research seeks to create a safer and more productive work environment for employees.",
    },
    {
      title: "Detect Incorrect hand movements",
      description:
        "Automating the detection and correction of sewing operators' imprecise hand movements is a major advancement in the apparel industry. This system will improve sewing accuracy and quality by evaluating errors in real time. Traditional methods relied on manual checks, which were slow and inconsistent. Automation offers benefits like consistency, immediate feedback, objective assessments, and better productivity. Overall, this innovation will enhance sewing techniques, standardize quality, and help companies improve their processes to meet the evolving needs of the industry.",
    },
    {
      title:
        "Identify the incorrect sitting posture",
      description:
        "The system will use cameras and sensors to monitor workers' posture in real time. The data will be sent to a controller for analysis. A machine learning algorithm will identify and classify different postures.It’s important to choose durable and affordable sensors and place them correctly to ensure accuracy without disrupting work. The system will be easy for new employees to use, helping to boost productivity and reduce the risk of injuries.",
    },
    {
      title: "Skill prediction dashboard",
      description:
        "The Smart Sewing Skill Prediction Dashboard will help automate the detection of incorrect hand movements and sitting posture while using machine learning to analyze hand movements and worker data in the apparel industry.The goal is to create an easy-to-use interface for workers to track their skills and performance. It will combine hand motion analysis and worker data to create a reliable system. The dashboard will use advanced machine learning to predict skill levels and provide personalized improvement recommendations.To ensure it works well for both small and large teams, the dashboard will be thoroughly tested and designed to support ongoing skill development in the industry.",
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
