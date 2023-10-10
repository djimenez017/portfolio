import Expense from "@/assets/images/Projects/expenses.gif";
import Lemon from "@/assets/images/Projects/LittleLemon.png";
import JMG from "@/assets/images/Projects/jmg.png";

const projects = [
  {
    title: "Expense App",
    link: "expense-app",
    image: Expense,
    id: 1,
    url: "https://expenses.jimenez.tech/",
    github: "https://github.com/djimenez017/expenseapp-fe",
    github2: "https://github.com/djimenez017/expenseapp-be",
    tech: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "ApolloJS",
      "GraphQL",
      "PrismaJS",
      "PostgreSQL",
      "Railway",
    ],
    description:
      "A CRUD application to track expenses. I wanted a way to track my expenses and wanted experience with back-end development.",
  },
  {
    title: "Little Lemon",
    link: "little-lemon",
    image: Lemon,
    id: 2,
    url: "",
    github: "https://github.com/djimenez017/react-capstone-project",
    github2: "",
    tech: ["ReactJS", "CSS"],
    description:
      "Final project for the Meta Front-End Developer Professional Certificate. This was a Website for the the ficticious restaurant Little Lemon.  ",
  },
  {
    title: "JMG Photography",
    link: "jmg-photography",
    image: JMG,
    id: 3,
    url: "https://jmg13.com/",
    github: "https://github.com/djimenez017/JMGPhotography",
    github2: "",
    tech: ["ReactJS", "Styled-Components", "GatsbyJS"],
    description: "Final Project for my Web Design class in College.",
  },
];

export default projects;
