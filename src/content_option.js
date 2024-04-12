import ClipstreamPro from "./assets/images/criptostream.JPG";
import modishMart from "./assets/images/Modish-mart.jpg";
import Tmdb from "./assets/images/tmdb.jpg";
import cameraClip from "./assets/images/camera-clip.jpg";
import MyRestaurent from "./assets/images/my-restaurent.jpg";
import LinkedinExtension from "./assets/images/linkedin-extension.jpg";
import FoodApp from "./assets/images/food-app.jpg";
import thiefDetector from "./assets/images/thief-detector.webp";

const logotext = "ABHISHEK";
const meta = {
    title: "Abhishek Kumar",
    description: "I’m Abhishek Kumar Software Engineer _ Full stack devloper,currently working in Whizlabs",
};

const introdata = {
    title: "I’m Abhishek Kumar",
    animated: {
        first: "I am Software Engineer",
        second: "I am Frontend Developer",
        third: "I am Full Stack Developer",
        fourth: "I love Coding"
    },
    description: "A software engineer is a professional who applies engineering principles to the design, development, maintenance, testing, and evaluation of software and systems.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "A Full Stack Developer is a versatile professional who possesses expertise in both frontend and backend development. They are proficient in a wide range of technologies and frameworks, enabling them to work on all layers of a software application, from the user interface to the database and everything in between.",
};
const worktimeline = [{
        jobtitle: "Full Stack Developer",
        where: "Coimbatore",
        date: "Nov 2023 - Present",
    },
    {
        jobtitle: "React Developer",
        where: "Hyderabad",
        date: "Mar 2023 - Aug 2023",
    },
    {
        jobtitle: "Frontend Developer",
        where: "Noida",
        date: "Oct 2022 - Feb 2023",
    },
];

const skills = [{
        name: "ReactJS",
        value: 90,
    },
    {
        name: "NextJS",
        value: 80,
    },
    {
        name: "Javascript",
        value: 85,
    },
    {
        name: "Java",
        value: 70,
    },
    {
        name: "NodeJS",
        value: 85,
    },
    {
        name: "ExpressJS",
        value: 80,
    },
    {
        name: "mongoDB",
        value: 70,
    },
    {
        name: "MySQL",
        value: 65,
    },
    {
        name: "SQL",
        value: 70,
    },
    {
        name: "GitHub",
        value: 85,
    },
    {
        name: "Jira",
        value: 55
    },
    {
        name: "AWS",
        value: 50,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "NextUI",
        value: 75,
    },
    {
        name: "MaterialUI",
        value: 85
    }

];

const services = [{
        title: "Full Stack Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    { 
        img: ClipstreamPro,
        code: "https://github.com/royabhi647/instagram-reels",
        description: "Clipstream Pro.",
        link: "https://instagram-reels-alpha.vercel.app/login",
    },
    {
        img: modishMart,
        description: "Modish Mart.",
        code: "https://github.com/royabhi647/MERN-DASHBOARD",
        // link: "https://www.linkedin.com/feed/update/urn:li:activity:7127216277646970880/",
    },
    {
        img: LinkedinExtension,
        code: "https://github.com/royabhi647/LinkedIn-extension",
        description: "Extension LinkedIn.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7127216277646970880/",
    }, 
    {
        img: thiefDetector,
        code: "https://github.com/royabhi647/object-detection",
        description: "Object Detector",
        link: "https://object-detection-kappa.vercel.app/"
    },
    {
        img: Tmdb,
        description: "Movies-Platform",
        code: "https://github.com/royabhi647/tmdb-clone",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7109376937659154433/"
    },
    {
        img: cameraClip,
        description: "Camera Clip",
        code: "https://github.com/royabhi647/cameraApp",
        link: "https://royabhi647.github.io/cameraApp/",
    },
    {
        img: MyRestaurent,
        description: "My Restaurent",
        code: "https://github.com/royabhi647/restaurent-website",
        link: "https://graceful-sprinkles-f60e6f.netlify.app/",
    },
    {
        img: FoodApp,
        description: "Food App",
        code: "https://github.com/royabhi647/foodApp-Backend"
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "royabhi647@gmail.com",
    YOUR_FONE: "6204624711",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/royabhi647",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-70765a177/",
    leetcode: "https://leetcode.com/royabhi647/",
    gfg: "https://www.geeksforgeeks.org/user/royabhi647/",
    hackerrank: "https://www.hackerrank.com/profile/royabhi647"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};