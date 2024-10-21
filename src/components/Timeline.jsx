import { motion } from "framer-motion";
import React from 'react';

const Timeline = () => {
  const timelineEvents = [
    {
      date: "February 2024",
      title: "Project Proposal",
      description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: 6,
      progress: 6,
      color: "#E0B3FF"  // color for the progress bar
    },
    {
      date: "May 2024",
      title: "Progress Presentation I",
      description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: 15,
      progress: 15,
      color: "#82D4FF"
    },
    {
      date: "June 2024",
      title: "Research Paper",
      description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      marks: 10,
      progress: 10,
      color: "#74FF94"
    },
    {
      date: "September 2024",
      title: "Progress Presentation II",
      description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      marks: 18,
      progress: 18,
      color: "#FFA07A"  // light salmon color for progress bar
    },
    {
      date: "October 2024",
      title: "Website Assessment",
      description: "The Website helps to promote our research project and reveals all details related to the project.",
      marks: 2,
      progress: 2,
      color: "#FFD700"  // gold color for progress bar
    },
    {
      date: "November 2024",
      title: "Logbook",
      description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      marks: 2,
      progress: 2,
      color: "#FFB6C1"  // light pink color for progress bar
    },
    {
      date: "August 2024",
      title: "Final Report",
      description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below include marks for Individual & group reports and also Final report.",
      marks: 19,
      progress: 19,
      color: "#BA55D3"  // medium orchid color for progress bar
    },
    {
      date: "October 2024",
      title: "Final Presentation & Viva",
      description: "Viva is held individually to assess each member's contribution to the project.",
      marks: 20,
      progress: 20,
      color: "#4682B4"  // steel blue color for progress bar
    }
  ];

  return (
    <div id="Timeline" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Timeline in Brief
      </motion.h2>

      <div className="flex flex-col items-center">
        {timelineEvents.map((event, index) => {
          // Calculate cumulative progress for this point and create progress bar segments
          const cumulativeSegments = timelineEvents.slice(0, index + 1);

          return (
            <motion.div
              key={index}
              className="my-10 flex flex-col items-start w-2/3"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-4" /> {/* Red dot */}
                <p className="text-lg font-semibold">{event.date}</p>
              </div>
              <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
              <p className="mt-1 text-purple-300">{event.description}</p>
              <p className="mt-2 font-semibold">Marks Allocated: {event.marks}</p>

              {/* Cumulative segmented progress bar */}
              <div className="relative w-full bg-gray-200 h-2 rounded-full mt-2 flex">
                {cumulativeSegments.map((seg, segIndex) => (
                  <motion.div
                    key={segIndex}
                    className="h-2"
                    style={{
                      backgroundColor: seg.color,
                      width: `${seg.progress}%`
                    }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${seg.progress}%` }}
                    transition={{ duration: 1 }}
                  />
                ))}
              </div>
              <span className="absolute right-0 top-0 text-xs text-gray-600">
                {cumulativeSegments.reduce((total, seg) => total + seg.progress, 0)}%
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
