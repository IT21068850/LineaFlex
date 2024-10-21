import { motion } from "framer-motion";
import React from 'react';
import samadhee from "../assets/team/samadhee.png";
import supipi from "../assets/team/supipi.png";
import chathuranga from"../assets/team/chathuranga.jpg";
import yusri from"../assets/team/yusri.png";
import rathnayake from"../assets/team/rathnayake.png";
import rupasingha from"../assets/team/rupasingha.png";
import senadheera from"../assets/team/senadheera.png";

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
      <p className="text-gray-400">{institution}</p>
      <p className="text-gray-400">{department || division}</p>

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
          imgSrc={samadhee}
          scholarLink="https://scholar.example.com"
          emailLink="janaka@example.com"
        />

        {/* Co-Supervisor */}
        <TeamMemberCard
          name="Ms. Supipi Karunathilaka"
          role="Co-Supervisor"
          institution="Sri Lanka Institute of Information Technology"
          department="Software Engineering"
          imgSrc={supipi}
          linkedinLink="https://linkedin.com/in/dilani"
          emailLink="dilani@example.com"
        />

        {/* External Supervisor */}
        <TeamMemberCard
          name="Mr. K.A.D. Chathuranga"
          role="External Supervisor"
          institution="MAS Linea Aqua"
          division="Research & Development"
          imgSrc={chathuranga}
          scholarLink="https://scholar.example.com"
          emailLink="nayanie@example.com"
        />

        {/* Group Leader */}
        <TeamMemberCard
          name="Yusri M.A.M"
          role="Group Leader"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc={yusri}
          linkedinLink="https://www.linkedin.com/in/yusri-areef-4446a9228/"
          emailLink="vidhanaarachchi@example.com"
        />

        {/* Group Member 1 */}
        <TeamMemberCard
          name="Rathnayake R.M.K.D.B"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc={rathnayake}
          linkedinLink="https://www.linkedin.com/in/dulara-rathnayake/"
          emailLink="dulararathnayake519@gmail.com"
        />

        {/* Group Member 2 */}
        <TeamMemberCard
          name="Rupasingha W.P.S"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc={rupasingha}
          linkedinLink="https://www.linkedin.com/in/pulitha-r-b41060119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          emailLink="akalanka@example.com"
        />

        {/* Group Member 3 */}
        <TeamMemberCard
          name="Senadheera S.A.T.P"
          role="Group Member"
          institution="Sri Lanka Institute of Information Technology"
          department="Data Science"
          imgSrc={senadheera}
          linkedinLink="https://www.linkedin.com/in/thimira-senadheera-1011b7262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          emailLink="senadheerathimira@gmail.com"
        />
      </div>
    </div>
  );
};

export default Team;
