import { motion } from "framer-motion";

import React from "react";

const DocumentGrid = () => {
    const documents = [
        {
            title: "Topic Assessment",
            submitted: "Submitted on 2021/02/25",
            type: "Group",
            downloadLink: "https://drive.google.com/file/d/1ojEndiKjn-N0vAxdeJraSFRp5D_U81OC/view?usp=sharing",
            status: "submitted",
        },
        {
            title: "Project Charter",
            submitted: "Submitted on 2024/02/25",
            type: "Group",
            downloadLink: "#",
            status: "submitted",
        },
        {
            title: "Project Proposal",
            submitted: "Submitted on 2024/03/22",
            type: "Individual",
            downloadLink: "https://drive.google.com/drive/folders/1aqjnX4P5_NCpXrgD4vdiiefCfgiQe2Q2?usp=sharing",
            status: "submitted",
        },
        {
            title: "Status Documents I",
            submitted: "Submitted on 2024/07/05",
            type: "Individual",
            downloadLink: "https://drive.google.com/drive/folders/1S2qGEe5P4jGnIT-tXl0pBr1IfLlhl1Ly?usp=sharing",
            status: "submitted",
        },
        {
            title: "Status Documents II",
            submitted: "Yet to be submitted, link will be updated soon.",
            type: "Individual",
            downloadLink: "https://drive.google.com/drive/folders/1ppFRTKrUXWO8Ps0CHoStCjejMCLQVz0t?usp=sharing",
            status: "submitted",
        },
        {
            title: "Research Paper",
            submitted: "Yet to be submitted, link will be updated soon.",
            type: "Group",
            downloadLink: "https://drive.google.com/file/d/1oXgARa8go_UEkCZ-HgGCW9EZkHH8cmV4/view?usp=sharing",
            status: "submitted",
        },
        {
            title: "Final Report",
            submitted: "Submitted on 2024/10/13",
            type: "Group",
            downloadLink: "https://drive.google.com/drive/folders/1QI_XJVC7VC1Rc2n1bFSTFjRGRP450hCH?usp=sharing",
            status: "submitted",
        },
        {
            title: "Poster",
            submitted: "Submitted on 2024/10/13",
            type: "Group",
            downloadLink: "#",
            status: "submitted",
        },
    ];


    const presentations = [
        {
            title: "Project Proposal",
            submitted: "Submitted on 2024/02/25",
            type: "Group",
            downloadLink: "https://docs.google.com/presentation/d/1m1oCtCcJzc3wRvzSaYi7UjE44j_bpAOu/edit?usp=sharing&ouid=116251346473649527368&rtpof=true&sd=true",
            status: "submitted",
        },
        {
            title: "Progress Presentation I",
            submitted: "Submitted on 2024/02/25",
            type: "Group",
            downloadLink: "https://docs.google.com/presentation/d/1gcvLifbosLqOdixkw1J-CAfEVRJk-drr/edit?usp=sharing&ouid=116251346473649527368&rtpof=true&sd=true",
            status: "submitted",
        },
        {
            title: "Progress Presentation II",
            submitted: "Submitted on 2024/03/22",
            type: "Group",
            downloadLink: "#",
            status: "submitted",
        },
        {
            title: "Final Presentation",
            submitted: "Submitted on 2024/07/05",
            type: "Group",
            downloadLink: "#",
            status: "submitted",
        }
    ];

    return (
        <div id="DocumentGrid" className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Documents</motion.h2>
            <div className="p-8">
                <p className="text-lg mb-6">
                    Please find all documents related to this project below.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {documents.map((doc, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded-lg shadow-md"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-700 mr-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                        <h3 className="font-semibold text-lg">{doc.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm">{doc.submitted}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-300 mb-2">
                                        {doc.type}
                                    </p>
                                    <a
                                        href={doc.downloadLink}
                                        className={`text-sm ${doc.status === "submitted"
                                                ? "text-green-500"
                                                : "text-blue-500"
                                            } font-semibold`}
                                    >
                                        {doc.status === "submitted" ? "Download" : "Pending"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Presntations</motion.h2>
            <div className="p-8">
                <p className="text-lg mb-6">
                    Please find all presentations related to this project below.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {presentations.map((doc, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 p-4 rounded-lg shadow-md"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-700 mr-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                        <h3 className="font-semibold text-lg">{doc.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm">{doc.submitted}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">
                                        {doc.type}
                                    </p>
                                    <a
                                        href={doc.downloadLink}
                                        className={`text-sm ${doc.status === "submitted"
                                                ? "text-green-500"
                                                : "text-blue-500"
                                            } font-semibold`}
                                    >
                                        {doc.status === "submitted" ? "Download" : "Pending"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        
    );
};

export default DocumentGrid;
