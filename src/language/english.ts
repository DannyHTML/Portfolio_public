export const langEnglish = {
  nav: {
    about: "about me",
    skill: "skills",
    projects: "projects",
    contact: "contact",
  },
  welcome: {
    text: "Hello, I am",
    name: "Danny Jager",
    job: "Front-end Developer",
  },
  about: {
    title: "Who am I?",
    paragraph_1:
      "Hello, I'm Danny, an enthusiastic front-end developer with approximately one and a half years of experience. I'm currently doing a Front-End Developer program at Hacklab. I am extremely driven and highly eager to learn, with the ultimate goal of eventually acquiring back-end skills to facilitate effective communication with back-end developers and, perhaps, to become a Full Stack developer someday.",
    paragraph_2:
      "I have experience with modern technologies like Vite, Vue 3, TypeScript, and Tailwind CSS. My focus is on building attractive and responsive websites. I am effective both independently and in a team, and I value accuracy, critical thinking, and customer orientation. I am fluent in Dutch and English. My portfolio is a personal project that I am proud of. I designed and implemented a functional contact form with PHP (back-end) myself. Outside of work, I have a passion for cars and enjoy spending time in the gym or with friends.",
  },
  skills: {
    title: "Skills",
  },
  projects: {
    title: "Projects",
  },
  projecten: [
    {
      id: 1,
      title: "Bookmark landing page",
      img: "./images/bookmark-desktop.png",
      description:
        "I have created this project using Vite, Vue 3, TypeScript, and Tailwind CSS. This landing page features a responsive design with a sleek mobile menu. The Features section is implemented using Vue Router. I have stored the extensions and questions in a JSON file instead of hard-coding them, making it easier to edit. This could also have been accomplished using an object, but I wanted to demonstrate the ability to work with a JSON file.",
      urlLive: "https://dannyhtml.github.io/Bookmark-landing-page/#/",
      urlGithub: "https://github.com/DannyHTML/Bookmark-landing-page",
    },
    {
      id: 2,
      title: "E-commerce",
      img: "./images/e-commerce-desktop.png",
      description:
        "I have created this project using Vite, Vue 3, TypeScript, and Tailwind CSS. This landing page is a responsive design with a beautiful mobile menu. It includes a functional photo gallery, and on larger screens, a lightbox function (click on the photos). The shopping cart also works and calculates the total costs, with an option to clear the cart.",
      urlLive: "https://dannyhtml.github.io/E-commerce/",
      urlGithub: "https://github.com/DannyHTML/E-commerce",
    },
    {
      id: 3,
      title: "Job-listing",
      img: "./images/job-listing-project.png",
      description:
        "I have created this project using Vite, Vue 3, TypeScript, and Tailwind CSS. This is a job filtering project that I built to be responsive. When you click on one or more tags, a bar appears, and the jobs are filtered accordingly. You can easily remove the tags by clicking on the X. With the Clear button, you can remove your entire search query.",
      urlLive: "https://dannyhtml.github.io/Job-listings/",
      urlGithub: "https://github.com/DannyHTML/Job-listings",
    },
  ],
  contact: {
    title: "Contact",
    name: "Name:",
    name_placeholder: "Name...",
    name_error: "Fill in your name.",
    email_name: "Email:",
    email_name_placeholder: "Email address...",
    email_name_error: "Enter your email address here.",
    message_name: "Message:",
    message_name_placeholder: "Leave your message here...",
    message_name_error: "Write your message here.",
    message_sending: "Message is being sent...",
    message_sent: "Message sent successfully.",
    contact_sent_btn: "Send",
  },
  footer: {
    title: "made by",
    author: "Danny Jager",
  },
};
