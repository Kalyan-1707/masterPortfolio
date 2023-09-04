/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pavan Kalyan Konudula's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pavan Kalyan Konudula Portfolio",
    type: "website",
    url: "http://pavankalyankonudula.com/",
  },
};

//Home Page
const greeting = {
  title: "Pavan Kalyan Konudula",
  logo_name: "PavanKalyanKonudula",
  nickname: "kalyan_konudula",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1AGU-L14udWcD75Lugucnkc_flWBbYYKF/view?usp=sharing",
  portfolio_repository: "https://github.com/Kalyan-1707/masterPortfolio",
  githubProfile: "https://github.com/Kalyan-1707",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Kalyan-1707",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pavan-kalyan-konudula/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pavankalyan94414@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Kalyan_Konudula",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Kalyan_Konudula/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/kalyan_konudula/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of North Carolina at Charlotte",
      subtitle: "M.Sc in Information Technology",
      logo_path: "uncc.jpeg",
      alt_name: "UNCC",
      duration: "2023 - Presentt",
      descriptions: [
        "⚡ Mastering advanced web development concepts through rigorous coursework in Network Based Application Development, Applied Databases, Software System Design and Implementation, and Principles of Information Security and Privacy.",
        "⚡ Gaining knowledge of database design and implementation, software engineering principles, and information security and privacy.",
        "⚡ Demonstrating leadership and teamwork skills through participation in class projects and group assignments.",
      ],
      website_link: "https://www.charlotte.edu/",
    },
    {
      title: "SASTRA Deemed University",
      subtitle: "B.Tech in Information and Communication Technology",
      logo_path: "SASTRA.webp",
      alt_name: "SASTRA Uni",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Graduated with a Bachelor of Science in Information and Communication Technology, with a strong foundation in core computer science courses.",
        "⚡ Studied advanced topics in Java, Data Structures and Algorithms, Operating Systems, Database Management Systems, Software Engineering, and Cryptography and Network Security.",
        "⚡ Developed an image steganography script using Python, and hosted it on GitHub.",
        '⚡ Implemented content-aware partial compression using Hadoop, based on the IEEE paper "Content-Aware Partial Compression for Textual Big Data Analysis in Hadoop".',
      ],
      website_link: "https://www.sastra.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Developer Student Club",
      subtitle: "- Hack DSC 2020",
      logo_path: "dsc.png",
      certificate_link:
        "https://github.com/Kalyan-1707/certificates/blob/884041fc84ef642ff53f0998bd1cd7d7ba3cb3f9/Pavan%20Kalyan%20Konudula.pdf",
      alt_name: "DSC",
      color_code: "#1F70C199",
    },
    {
      title: "Mastering React.js with Phone Directory Application",
      subtitle: "- upGrad",
      logo_path: "upGrad.jpeg",
      certificate_link:
        "https://www.credential.net/d15b2538-8f60-4f63-8ef4-7eda1d54a5a3#gs.4orbid",
      alt_name: "upGrad",
      color_code: "#8C151599",
    },
    {
      title: "Relevel",
      subtitle: "- Topped monthly leaderboard",
      logo_path: "relevel.png",
      certificate_link:
        "https://twitter.com/RelevelAchiever/status/1507252194588135424",
      alt_name: "relevel",
      color_code: "#00000099",
    },
    {
      title: "Java (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank_logo.svg",
      certificate_link: "https://www.hackerrank.com/certificates/dbd9e894bd3b",
      alt_name: "hackerrank",
      color_code: "#00000099",
    },
    {
      title: "Python for Benginners",
      subtitle: "- udemy",
      logo_path: "logo-udemy.svg",
      certificate_link: "https://www.udemy.com/certificate/UC-VHGRT9OS/",
      alt_name: "udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Ethical Hacking",
      subtitle: "- INTERNSHALA",
      logo_path: "internshala.jpeg",
      certificate_link:
        "https://github.com/Kalyan-1707/certificates/blob/884041fc84ef642ff53f0998bd1cd7d7ba3cb3f9/Ethical%20Hacking%20Training%20-%20Certificate%20of%20Completion.pdf",
      alt_name: "internshala",
      color_code: "#1F70C199",
    },
    {
      title: "Web Development",
      subtitle: "- INTERNSHALA",
      logo_path: "internshala.jpeg",
      certificate_link:
        "https://github.com/Kalyan-1707/certificates/blob/884041fc84ef642ff53f0998bd1cd7d7ba3cb3f9/Web%20Development%20Training%20-%20Certificate%20of%20Completion.pdf",
      alt_name: "internshala",
      color_code: "#D83B0199",
    },

    {
      title: "TechGig Code Gladiators 2020",
      subtitle: "- Semi-Finalist",
      logo_path: "techgig.webp",
      certificate_link:
        "https://github.com/Kalyan-1707/certificates/blob/884041fc84ef642ff53f0998bd1cd7d7ba3cb3f9/TechGig%20-%20SemiFinalist.PNG",
      alt_name: "techgig",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship's",
  description:
    "I have worked with couple of evolving startups as a Frontend Developer. I have also worked with some well established companies mostly as Software Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Frontend Developer (React.js)",
          company: "Phyllo",
          company_url: "https://www.linkedin.com/company/getphyllo/",
          logo_path: "phyllo.png",
          duration: "Sep 2022 - July 2023",
          location: "Bangalore, Karnataka",
          description:
            "Updated old code bases to modern development standards, improving functionality. Improved the performance of Phyllo's SDK by 20% through code optimization and performance enhancements. Single-handedly set up an automation framework for end-to-end testing using GitHub Actions. Planned and developed interfaces that simplified overall management and offered ease of use.",
          color: "#9b1578",
        },
        {
          title: "Frontend Developer(Angular)",
          company: "Zendynamix",
          company_url: "https://www.linkedin.com/company/zendynamix/",
          logo_path: "zendynamix.jpeg",
          duration: "Apr 2022 - July 2022",
          location: "Bangalore, Karnataka",
          description:
            "Acquired advanced skills in Angular framework and ngrx for state management. Attained experience in developing PWAs and using socket.io for improved responsiveness and seamless connectivity. Developed an E-commerce application Smoor with features like payment integration using Angular and Razorpay.",
          color: "#fc1f20",
        },
        {
          title: "Associate Software Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "Aug 2021 - Mar 2022",
          location: "Hyderabad, Telangana",
          description:
            "Demonstrated expertise in using Appian to design, develop, and deploy business process management solutions. Utilized my skills in application development to create a functional and user-friendly vehicle fleet management tool. Contributed to the development of a pre-clinical project that connects medical doctors and policy holders.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Developer Adovocate Intern",
          company: "ADP",
          company_url: "https://www.linkedin.com/company/adp/",
          logo_path: "adp.jpeg",
          duration: "Feb 2021 - July 2021",
          location: "Chennai, Tamil Nadu",
          description:
            "Acquired in-depth knowledge and hands-on experience with the no-code platform, Lifion. Demonstrated expertise in using Lifion to design and build custom applications and solutions without the need for traditional coding. Utilized my skills in application development to create a functional and user-friendly platform that allows associates to browse and join physical activities, meetings, and groups that interest them",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology in Web Development.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pavan_profile.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Charlotte, NC 28262, USA",
    locality: "Charlotte",
    country: "USA",
    region: "North Carolina",
    postalCode: "28262",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/i6jAmGmDeXcXbfYT7",
  },
  phoneSection: {
    title: "Mobile",
    subtitle: "+1 (704)-930-3839",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
