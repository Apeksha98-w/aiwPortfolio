/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Apeksha Warnakulasooriya",
  description:
    "Passionately dedicated to creating a positive impact on both business and society through technology-driven initiatives.",
  og: {
    title: "Apeksha Warnakulasooriya Portfolio",
    type: "website",
    //add my domain url
    url: "https://apeksha98-w.github.io/aiwPortfolio/#/",
  },
};

//Home Page
const greeting = {
  title: "Apeksha Warnakulasooriya",
  logo_name: "ApekshaWarnakulasooriya",
  subTitle:
    "I am passionately dedicated to creating a positive impact on both business and society through technology-driven initiatives.",
  //edit these things
    resumeLink:
    "https://drive.google.com/file/d/1laG8JppaXzQtBtFW9anMvCxWgMz2GF1Z/view?usp=sharing",
  portfolio_repository: "https://github.com/Apeksha98-w/aiwPortfolio",
  //edited
  githubProfile: "https://github.com/Apeksha98-w",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/Apeksha98-w",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/apeksha-warnakulasooriya-a9a123202/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:apekshawarnakulasooriya98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100079562450101&mibextid=ZbWKwL",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/apeksha_warnakula/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Application Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I excel in mobile application development using Flutter, with a strong background in developing  GPS technology to provide accurate and up-to-the-minute information on the movement and status of vehicles.",
        "⚡ Experience of working with different APIs",
        //"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "devicon:flutter",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "logos:dart",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "devicon:androidstudio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "devicon:android",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "arcticons:ios-launcher",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    /*{
      title: "Full Stack Development",
      fileName: "PMImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },*/
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficiency in collaborating across various cloud platforms.",
       // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        //"⚡ Deploying deep learning models on cloud to use on mobile devices",
        //"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        /*{
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },*/
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        /*{
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },*/
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        /*{
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },*/
      ],
    },
    {
      title: "Project Management",
      fileName: "PMImg",
      skills: [
        "⚡ Posess a better understanding of the Project Management Fundementals",
        "⚡ Experience of working with PM tools such as Slack platform and Trello/Jira boards",
        "⚡ Practice of  applying Agile concepts for accomplishing the software projects",
      ],
      softwareSkills: [
        {
          skillName: "Slack",
          fontAwesomeClassname: "devicon:slack",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "logos:trello",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "icon-park:github",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
      },
        
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Crafting visually appealing prototypes for mobile and web applications to captivate and engage users effectively",
        "⚡ Tailoring logo designs to match your brand's unique identity, whether it's refining existing logos or creating brand-new ones from the ground up",
      ],
      softwareSkills: [
        /*{
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },*/
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        /*{
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },*/
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
/*const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};*/

const degrees = {
  degrees: [
    {
      title: "Sabaragamuwa University of Sri Lanka",
      subtitle: "BSc (Hons) in Computing and Information Systems",
      subTitle : "Current GPA : 3.85",
      logo_path: "Logo-SUSL.png",
      alt_name: "SUSL",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied Software Engineering subjects:",
                "C",
                "Java",
                "DBMS",
                "Algorithms",
                "Networking",
                "PHP",
                "Advanced DBMS",
                "Operating Systems",
                "Software Engineering",
                "Business Intelligence",
                "System Administration and Dsign",
                "Information System Security and Assurance",
                "Software Quality Assurance",
          
        "⚡ Apart from this, I have studied subjects related to Software Project Management and Business Analysis ",
                "Software Project Management",
                "Agile Software Methodology",
                "Organizational Behavior and Management",
                "Enterprise Architecture",
                "IT Governance",
                "Social and Professional Issues",
                "IT Risk Management",
        
      ],
      website_link: "https://www.sab.ac.lk/computing/undergraduate/bsc-is-about",
    },
    {
      title: "National Institute of Business Management",
      subtitle: "Certificate in Computer Science",
      logo_path: "NIBM.jpg",
      alt_name: "NIBM",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have studied basic Computer Science Subjects and Labs",
                "C",
                "C#",
                "MySQL",
                "HTML, CSS and JS",
                "Computer Architecture",
      ],
      website_link: "https://www.nibm.lk/programmes/certificate-in-computer-science/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Cyber Security",
      subtitle: "CISCO",
      logo_path: "ICS.png",
      certificate_link:
        "https://drive.google.com/file/d/1qLk8XEHnRENrJ9BJL8JwhpfzSAFAjeaE/view?usp=sharing",
      alt_name: "Introduction to Networking Badge",
      color_code: "#FFBB0099",
    },
    {
      title: "C For Everyone",
      subtitle: "Coursera",
      logo_path: "california.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/S83Y4QUDPQSC",
      alt_name: "Santa Cruz- University of California",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Cloud",
      subtitle: "IBM",
      logo_path: "cloudCore.png",
      certificate_link:
        "https://drive.google.com/file/d/1mDaTqmE8sTznyoW49Byan3oE3r8hVf0k/view?usp=drive_link",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "C",
      subtitle: "Sololearn",
      logo_path: "solologo.png",
      certificate_link:
        "https://www.sololearn.com/certificates/CT-FCF513US",
      alt_name: "Sololearn",
      color_code: "#8C151599",
    },
    {
      title: "Python for Data Science",
      subtitle: "IBM",
      logo_path: "PythonforData.png",
      certificate_link:
        "https://drive.google.com/file/d/1MZ7___GOenyAqg_i2Auix9-2zMv8Jrih/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "IEEEXtreme 15.0",
      subtitle: "IEEE",
      logo_path: "xtreme.png",
      certificate_link:
        "https://certificate.ieeextreme.org/generate-email-certificate/xKRY6q8i2qzfAZ",
      alt_name: "IEEEXtreme",
      color_code: "#0C9D5899",
    },
    {
      title: "Professional Emails in English",
      subtitle: "Georgia Institue of Technology",
      logo_path: "Georgia.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CD9KLWLL7CY6",
      alt_name: "Georgia Tech",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Networking",
      subtitle: "CISCO",
      logo_path: "cisco1.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1bBWXidByky8FPqc7-ozA9SGXBJK_l7DY",
      alt_name: "CISCO",
      color_code: "#FFBB0099",
    },
    {
      title: "Java",
      subtitle: "Sololearn",
      logo_path: "solologo.png",
      certificate_link:
        "https://www.sololearn.com/certificates/CT-RE1CJOFK",
      alt_name: "Sololearn",
      color_code: "#8C151599",
    },
    {
      title: "Android Studio",
      subtitle: "Great Learning",
      logo_path: "gl.jpg",
      certificate_link:
        "https://verify.mygreatlearning.com/verify/JEOLFNIS",
      alt_name: "Great Learning",
      color_code: "#4285F499",
    },
    {
      title: "Project Management Fundementals",
      subtitle: "Udemy",
      logo_path: "u.jpg",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-64b29bcd-2f62-40da-a4ee-13be47cdefd1.pdf",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "Project Management",
      subtitle: "Great Learning",
      logo_path: "gl.jpg",
      certificate_link:
        "https://olympus.mygreatlearning.com/courses/66443/certificate",
      alt_name: "Great Learning",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  //subtitle: "Work, Internship and Volunteership",
  description:
    "I have gained valuable work experience through volunteering opportunities, which I am eager to showcase in my portfolio.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Volunteerships",
      work: true,
      experiences: [
        {
          title: "Publicity Leader",
          company: "IEEE Sri Lanka Section SIGHT",
          company_url: "https://sight.ieee.lk/",
          logo_path: "sight.png",
          duration: "March 2023 - Present",
          location: "Sri Lanka",
          description:
            "I am currently working in the technical sub-committee of IEEE Sri Lanka Section SIGHT. This team involves in the Filter of Hope Project that has a great aim of installing water filters in rural areas of Sri Lanka while conducting the STEM UP workshops for the school children. My role is to create and monitor the Public Relation plan and to handle the IEEE SL SIGHT Social Media Platforms regarding this FOH project",
          
          color: "#0879bf",
        },
        {
          title: "Content Coordinator",
          company: "IEEE Student Branch of Sabaragamuwa University of Sri Lanka",
          company_url: "http://ieee.sab.ac.lk",
          logo_path: "1.png",
          duration: "October 2022 - August 2023",
          location: "SUSL, Belihul Oya",
          description:
            "I have worked as the Content Coordinator of the IEEE Student Branch of the Sabaragamuwa University. As an executive memeber I had to manage the all the social media platforms of IEE SB SUSL and handle the Designing, Video Editing and Writing teams for achieveing the success of the publicity and marketing plans of the Student Branch. In addition to that, I was responsible to conduct the publicity projects of each and every event we had held during our working period.",
          color: "#9b1578",
        },
        {
          title: "Public Relations Manager",
          company: "IEEE WIE Affinity Group of Sabaragamuwa University of Sri Lanka",
          company_url: "http://ieee.sab.ac.lk/wie",
          logo_path: "wie.png",
          duration: "June 2021 - October 2022",
          location: "SUSL, Belihul Oya",
          description:
            "I was the Public Relations Manager of the initial executive committee of the IEEE WIE AFfinity Group of SUSL. I was in charge of the membership development project since we initiated the IEEE WIE Affinity Group at SUSL and was able to gain memberships with the aid of the ex-com ",
          color: "#fc1f20",
        },
      ],
    },
    /*{
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },*/
    /*{
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I mainly focus on mobile application development projects with the use of Flutter framework and Firebase platform.   In addition to that I have contributed to many group projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have published an article abput Autonomic Systems on IEEE Sri Lanka Section Computer Science Chapter Magazine. As well I hope to work on more publications and research papers in near future",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      //id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Autonomic Systems",
      createdAt: "December, 2022",
      description: "Article Written on Autonomic Systems published in IEEE Computer Society Sri Lanka Chapter Newsletter Volume 02, Issue 03 & 04  ",
      url:
        "https://drive.google.com/file/d/1EgoFxJaz4T5X1TU_P-wrKBwE-Bbc1TY5/view",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "myphoto.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection:{
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "No:167/2, Old Tangalle Road, Kotuwegoda, Matara. 81000",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
