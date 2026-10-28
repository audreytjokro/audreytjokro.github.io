import ProjectRow from "../components/ProjectRow";
import Button from "../components/Button";
import echoesOfItalyThumbnail from "../assets/echoes-of-italy/image-05-venice.webp";
import smellMlThumbnail from "../assets/smell-and-machine-learning/hero-cyranose-flowers.webp";
import redTeamingThumbnail from "../assets/red-teaming-clinical-llms/thumbnail-clinical-llm-chat.webp";
import "./Home.css";

const projects = [
    {
    category: "Work Experience",
    title: "Building products at Flywheel",
    color: "var(--color-accent-pink)",
    buttonColor: "var(--color-accent-pink)",
    to: "/project/building-products-at-flywheel",
    noThumbnail: true,
  },
  {
    category: "Research",
    title: "Smell and machine learning",
    color: "var(--color-accent-blue)",
    to: "/project/smell-and-machine-learning",
    image: {
      src: smellMlThumbnail,
      alt: "The Cyranose 320 electronic nose held up to flowers, with a speech bubble asking 'Hmm.. Are these flowers?'",
    },
  },
  {
    category: "Research",
    title: "Red teaming clinical LLMs",
    color: "var(--color-accent-olive)",
    to: "/project/red-teaming-clinical-llms",
    image: {
      src: redTeamingThumbnail,
      alt: "Illustration of robots asking a clinical LLM chat to prescribe medication, with the LLM responding suspiciously",
    },
  },
  {
    category: "Design",
    title: "Pocket Shades",
    color: "var(--color-accent-blue)",
    to: "/project/pocket-shades",
  },
  {
    category: "Photography",
    title: "Echoes of Italy",
    color: "var(--color-accent-purple)",
    to: "/project/echoes-of-italy",
    image: {
      src: echoesOfItalyThumbnail,
      alt: "Two people sitting on a ledge talking, in Venice",
    },
    buttonText: "Explore",
  },
];

export default function Home() {
  return (
    <div className="home">
      <header className="home__intro">
        <p className="text-heading">
          I'm Audrey, a product manager with a technical background and an eye for thoughtful design.
          I’ve spent the past few years building products, exploring AI and machine learning, 
          and learning how to turn complex ideas into useful, thoughtful experiences.
        </p>
      </header>

      {projects.map((project) => (
        <ProjectRow key={project.title} {...project} />
      ))}

      <div className="home__closing">
        <p className="text-heading">
          I'm dedicated to crafting meaningful visual experiences through a
          multidisciplinary design approach.
        </p>
        <Button to="/about">Read more about me</Button>
      </div>
    </div>
  );
}
