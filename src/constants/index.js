import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const LOTFI_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "09/2023 - 11/2024:",
    role: "Full Stack Developer",
    company: "DCI Digital Career Institute Berlin",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS","Javascript", "ReactJS", "mongoDB"],
  },
  {
    year: "01/2010 - 04/2023,",
    role: "Project Manager",
    company: "Mo-web Research, Düsseldorf",
    description: `Management and administration of the company website,
    including regular updates and improvements.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "01/2007 - 12/2009,",
    role: "Panel Manager",
    company: "Mo-web Research, Düsseldorf",
    description: `Management and administration of the French user Panel`,
    // technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Hours Tracker",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    gitLink :"https://github.com/lotfi80/zeiterfassung_v5",
    // productionLink :"https://lotfi80.github.io/Final-project-Game-canvas-OOP/"

  },
  {
    title: "BeMyEye",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    gitLink :"https://github.com/lotfi80/BeMyEye-",
    productionLink :"https://zeiterfassung-v5.onrender.com/"

  },
  {
    title: "Game Canvas *OOP*",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    gitLink :"https://github.com/lotfi80/zeiterfassung_v5",
    productionLink :"https://lotfi80.github.io/Final-project-Game-canvas-OOP/"
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
