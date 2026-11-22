export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  /** Add a local asset import or public image URL when a project screenshot is available. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Decent AI",
    description:
      "AI-powered application using Groq API with markdown rendering support.",
    tech: ["React", "Node", "TypeScript"],
    github: "https://github.com/dushyantkumar4/DecentAi",
    live: "https://ai-frontend-eta-blond.vercel.app/",
    image:
      "https://res.cloudinary.com/dq0mvuuhd/image/upload/v1787062294/zyhjxd57gu3crgrcbjjq.png",
  },
  {
    title: "Decent Expense",
    description:
      "Finance tracking application with analytics dashboards and charts.",
    tech: ["MERN", "TypeScript"],
    github: "https://github.com/dushyantkumar4/financeFront",
    live: "https://finance-front-xi.vercel.app/",
    image:
      "https://res.cloudinary.com/dq0mvuuhd/image/upload/v1787062438/nuzew6yep0ujetld86uk.png",
  },
  {
    title: "Decent Food",
    description:
      "Swiggy-style food ordering web app with API integration, cart management, responsive UI, and comprehensive testing.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Cloudinary", "Vitest"],
    github: "https://github.com/dushyantkumar4/DecentFood",
    live: "https://swigy-beryl.vercel.app/",
    image:
      "https://res.cloudinary.com/dq0mvuuhd/image/upload/v1788253000/lvgazundd0t7kghrq4iu.png",
  },
  {
    title: "Wanderlust",
    description:
      "Airbnb-style property booking platform with reviews and listings.",
    tech: ["Node", "Express", "MongoDB"],
    github: "https://github.com/dushyantkumar4",
    live: "https://majorproject-fvii.onrender.com/listings",
    image:
      "https://res.cloudinary.com/dq0mvuuhd/image/upload/v1787062272/lkr8p4xgjafjf62oswyt.png",
  },
];
