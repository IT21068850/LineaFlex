import { motion } from "framer-motion";
import React from 'react';

// Component for individual team member card
const TeamMemberCard = ({ name, role, institution, department, division, imgSrc, scholarLink, emailLink, linkedinLink }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="border rounded-lg shadow-md p-4 max-w-xs text-center"
    >
      <img
        src={imgSrc}
        alt={`${name}'s profile`}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      {role && <span className="text-sm text-gray-600 py-1 px-3 bg-green-200 rounded-lg inline-block my-2">{role}</span>}
      <p className="text-gray-700">{institution}</p>
      <p className="text-gray-700">{department || division}</p>

      {/* Links */}
      <div className="flex justify-center space-x-4 mt-4">
        {scholarLink && (
          <a href={scholarLink} target="_blank" rel="noopener noreferrer" className="text-green-500">
            G-Scholar
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            LinkedIn
          </a>
        )}
        {emailLink && (
          <a href={`mailto:${emailLink}`} className="text-green-500">
            E-Mail
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div id="TeamSection" className="border-b Oborder-neutral-900 pb-4 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Meet Our Team!
      </motion.h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Supervisor */}
        <TeamMemberCard
          name="Mr. Samadhee Rathnayake"
          role="Supervisor"
          institution="Sri Lanka Institute of Information Technology"
          department="Information Systems Engineering"
          imgSrc="path-to-janaka-image"
          scholarLink="https://scholar.example.com"
          emailLink="janaka@example.com"
        />

        {/* Co-Supervisor */}
        <TeamMemberCard
          name="Ms. Supipi Karunathilaka"
          role="Co-Supervisor"
          institution="Sri Lanka Institute of Information Technology"
          department="Software Engineering"
          imgSrc="path-to-dilani-image"
          linkedinLink="https://linkedin.com/in/dilani"
          emailLink="dilani@example.com"
        />

        {/* External Supervisor */}
        <TeamMemberCard
          name="Mr. K.A.D. Chathuranga"
          role="External Supervisor"
          institution="MAS Linea Aqua"
          division="Research & Development"
          imgSrc="path-to-nayanie-image"
          scholarLink="https://scholar.example.com"
          emailLink="nayanie@example.com"
        />

        {/* Group Leader */}
        <TeamMemberCard
          name="Yusri M.A.M"
          role="Group Leader"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc="path-to-vidhanaarachchi-image"
          linkedinLink="https://linkedin.com/in/vidhanaarachchi"
          emailLink="vidhanaarachchi@example.com"
        />

        {/* Group Member 1 */}
        <TeamMemberCard
          name="Rathnayake R.M.K.D.B"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc="path-to-gunasekara-image"
          linkedinLink="https://linkedin.com/in/gunasekara"
          emailLink="gunasekara@example.com"
        />

        {/* Group Member 2 */}
        <TeamMemberCard
          name="Rupasingha W.P.S"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc="path-to-akalanka-image"
          linkedinLink="https://linkedin.com/in/akalanka"
          emailLink="akalanka@example.com"
        />

        {/* Group Member 3 */}
        <TeamMemberCard
          name="Senadheera S.A.T.P"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc="path-to-rajapaksha-image"
          linkedinLink="https://linkedin.com/in/rajapaksha"
          emailLink="rajapaksha@example.com"
        />
      </div>
    </div>
  );
};

export default Team;
