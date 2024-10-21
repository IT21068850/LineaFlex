import { motion } from "framer-motion";
import React from 'react';

const ResearchProblem = () => {
  return (
    <div id="ResearchProblem" className="border-b border-neutral-900 pb-8 px-6">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Research Problem & Solution
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-lg leading-7 max-w-4xl mx-auto space-y-6"
      >
        <section>
          <h3 className="text-2xl font-semibold">Research Problem</h3>
          <p>
          The apparel industry faces challenges in optimizing hand movements during sewing as per General Sewing Data (GSD) standards. Traditional fixed-camera systems fail to capture detailed hand movements, limiting real-time feedback. Poor worker posture also leads to health risks and reduced productivity, while current training methods often fall short in addressing diverse skill levels.
          </p>
          <p className="mt-4"> 
          Integrating real-time systems using machine learning, computer vision, and sensors could enhance hand movement accuracy, correct posture, and provide personalized training. This approach would offer continuous monitoring, immediate feedback, and individualized interventions, improving both worker well-being and overall productivity in the industry
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold">Solution</h3>
          <p>
          Automation in apparel manufacturing improves detection of incorrect hand movements and sitting postures while enhancing skill prediction. Traditional methods are time-consuming, but automation provides real-time feedback, consistent error detection, and productivity gains. Machine learning algorithms, combined with top-mounted cameras, capture and classify hand movements, ensuring they align with correct techniques.
          </p>
          <p className="mt-4">
          To address posture issues, cameras and sensors like pressure and ultrasonic devices monitor workers, with data analyzed to identify and correct postures. The system is user-friendly, aiming to improve employee health and productivity.
          </p>
          <p className="mt-4">
          The Smart Sewing Skill Prediction Dashboard uses machine learning to assess hand movements and skill levels, offering personalized improvement suggestions. This holistic approach boosts both worker well-being and production quality.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default ResearchProblem;
