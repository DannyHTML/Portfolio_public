export const langEnglish = {
    nav: {
        skill: "Skills",
        projects: "Projects",
        contact: "contact"
    },
    welcome: {
        "welcome.text": "Hello, I am",
        "welcome.name": "Danny Jager",
        "welcome.job": "Front-end Developer"      
    },
    skills: {
        "skills.title": "Skills"
    },
    projects: {
        "projecten.title": "Projects"
    },
    projecten: [{
        id: 1,
        title: "Bookmark landing page",
        img: "./images/bookmark-desktop.png",           
        description:
            "I have created this project using Vite, Vue 3, TypeScript, and Tailwind CSS. This landing page features a responsive design with a sleek mobile menu. The Features section is implemented using Vue Router. I have stored the extensions and questions in a JSON file instead of hard-coding them, making it easier to edit. This could also have been accomplished using an object, but I wanted to demonstrate the ability to work with a JSON file.",
        urlLive: "https://dannyhtml.github.io/Bookmark-landing-page/#/",
        urlGithub: "https://github.com/DannyHTML/Bookmark-landing-page"
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
        }],
    contact: {
        "contact.title": "Contact",
        "contact.name": "Name:",
        "contact.name.placeholder": "Name...",
        "contact.name.error": "Fill in your name.",
        "email.name": "Email:",
        "email.name.placeholder": "Email address...",
        "email.name.error": "Enter your email address here.",
        "message.name": "Message:",
        "message.name.placeholder": "Leave your message here...",
        "message.name.error": "Write your message here.",
        "message.sending": "Message is being sent...",
        "message.sent": "Message has been successfully sent.",
        "contact.sent.btn": "Submit"
    },
    footer: {
        "footer.title": "made by",
        "footer.author": "Danny Jager"
    }
}