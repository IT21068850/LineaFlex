import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am hardworking, dedicated person that chases dreams and goals in my life. I am very passionate and interested in the field of Machine Learning Engineering, Data Scientist, Data Engineering and learning and being thorough with new technical and non-technical skills.`;

export const ABOUT_TEXT = `Recent advancements in computer vision have simplified hand movement monitoring in the apparel industry, but challenges remain. One study [3] improved tracking by placing cameras closer to workers, but this limited movement and comfort. Background subtraction techniques [4] also struggled with obstacles in dynamic environments, highlighting the need for better detection methods, possibly using deep learning.

GSD technology [5], which sets standard sewing times, has benefitted from real-time computer vision analysis, though earlier systems [3] faced issues with consistent tracking. While some research [6] used motion tracking software, it lacked real-time feedback and adherence to GSD standards.

Deep learning techniques, like Dense Trajectory and KELM [8], have improved motion recognition, but real-time feedback is still missing. As posture is crucial for workers' health and productivity, algorithms for posture detection need further refinement to work in dynamic environments and offer real-time correction [16].
`;


export const ABOUT_METHO = `The proposed Integrated Human Motion Monitoring System comprises four main components:

Target Employee Detection
Incorrect Hand Movement Detection
Incorrect Sitting Posture Identification
Skill Prediction Dashboard

As illustrated in the system architecture, the solution is intended to provide real-time performance and wellness enhancement feedback to sewing operators in the apparel industry. Users can capture videos of sewing activities and these are fed through a computer vision model hosted on a server. First, the system recognizes the target employee, and then, using the Random Forest classifier, the system determines whether there are any deviations from the GSD in the hand movement data of this employee. At the same time, improper sitting postures are identified with the help of sensor and video data and with the help of machine learning methods.

The system also consists of the Skill Prediction Dashboard, which uses hand motion and demographics to predict future skills. This information is then used to provide training recommendations. The feedback is given in real-time, allowing managers and operators to make adjustments that improve quality, productivity, and employee well-being along the entire production process.`

export const EXPERIENCES = [
  {
    year: "2023 Dec - 2024 Jun",
    role: "Data Analyst",
    company: " XYS(Pvt) Ltd",
    description: `As an Data Analyst at XYS I was employed in the Information Systems Division where I assumed the role of a Data Analyst. This section is very important to the operations of the company since it is in charge of the day to day running of the database systems to enhance efficiency in data storage and retrieval, and security. my tasks were  deal with other IT specialists to contribute to the technological background of the company's services.`,
    technologies: ["Sql", "Oracle", "PowerBI", "Tableau"],
  },
  {
    year: "2024 Jun - Present",
    role: "Machine Learning Engineer",
    company: "AiGrow (Pvt) Ltd",
    description: `As a Machine Learning Engineer, I developed and deployed predictive models, enhancing data-driven decision-making. I collaborated with teams to preprocess data and implement various algorithms while optimizing model performance.Additionally, I integrated scalable machine learning solutions into production`,
    technologies: ["Python", "Tensorflow", "PowerBI", "OpenCV"],
  },
];

export const PROJECTS = [
  {
    title: "PowerBI Dashboard Design Project",
    image: project1,
    description:
      "Developed interactive and visually engaging dashboard.Provided valuable insights for data-driven and decision-making. Incorporated a range of visualization, interactive filters and drill down features to present data.",
    technologies: ["Data Analytics", "PowerBI"],
  },
  {
    title: "Chatbot for Online Customer Support in E-commerce",
    image: project2,
    description:
      "Developed a custom framework for enhancing chatbot effectiveness tailored to a small clothing business.Led the development of a PyTorch-based model, enabling the chatbot to handle diverse client inquiries.",
    technologies: ["Data Analytics", "Machine Learning", "Data Mining"],
  },
  {
    title: " Travel & Tourism Management System",
    image: project3,
    description:
      "Travel and tourism management system to book tours from anywhere in the world through a single dynamic website that helps users to know all locations and tour details on a single website.this web application helps a tourist who is planning to travel to which places he will travel, whether there are accommodation facilities around those places, whether they are safe, and which transport will be used as a solution for the journey.",
    technologies: ["MERN stack"],
  },
  {
    title: "Diabetes Prediction System",
    image: project4,
    description:
      "Used data mining and machine learning techniques, effectively selecting and cleaning the dataset to ensure accurate results.Designed a user-friendly software interface for easy interaction with the prediction system, enhancing its accessibility and usability.",
    technologies: ["Tensorflow", "Streamlit", "MachineLearning", "DataMining"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
