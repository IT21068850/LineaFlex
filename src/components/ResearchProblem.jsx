import { motion } from "framer-motion";

import React from 'react'

const ResearchProblem = () => {
  return (
    <div id="ResearchProblem" className="border-b border-neutral-900 pb-4">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">
                Research Problem & Solution
            </motion.h2>
        </div>
  )
}

export default ResearchProblem
