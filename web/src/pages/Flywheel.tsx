import ProjectHeader from "../components/ProjectHeader";
import PixelPointingHand from "../components/PixelPointingHand";
import Button from "../components/Button";
import "./Flywheel.css";

const projects = [
  {
    title: "Making Incidents Easier to Understand",
    paragraphs: [
      "One of my favorite projects was launching an application status page to centralize information about platform incidents and outages. Previously, customers and internal teams had to rely on individual support requests and scattered updates to understand what was happening.",
      "The status page gave everyone a single place to check for updates, reducing repetitive support tickets and making incident communication much easier.",
    ],
  },
  {
    title: "Simplifying User Onboarding",
    paragraphs: [
      "I worked on two improvements to make the onboarding experience easier for new users. First, I introduced automated welcome emails after account creation to help users understand how to get started and reduce confusion. Later, I worked on enabling self-service account creation based on user permissions, so users could sign up without waiting for our team to manually create their accounts.",
      "Together, these changes made onboarding more intuitive, reduced manual work for internal teams, and gave users more independence.",
    ],
  },
  {
    title: "Building an Internal AI Assistant",
    paragraphs: [
      "I built a Slack-based AI assistant to help internal teams find answers to common technical and product questions without searching through documentation or asking colleagues.",
      "The assistant used retrieval-augmented generation (RAG), combining Slack Bolt, Node.js, Pinecone, and Claude to retrieve relevant information and generate responses.",
      "This was a fun opportunity to explore how LLMs could make everyday workflows more efficient.",
    ],
  },
];

export default function Flywheel() {
  return (
    <div className="flywheel">
      <ProjectHeader
        category="Product Management"
        title="Building and launching products"
        subtitle="Five years of building and improving B2B software."
        meta={[
          { label: "Timeline", value: "2021–2026" },
          {
            label: "Role & Responsibilities",
            value: [
              "Product Management",
              "Product Development & Strategy",
              "Technical Operations",
            ],
          },
          { label: "Company", value: "Flywheel Digital — Commerce Cloud" },
          {
            label: "Focus",
            value: ["B2B SaaS", "Internal Tools", "Product Experience"],
          },
        ]}
      />

      <section className="flywheel__section">
        <p className="text-caption-3 flywheel__eyebrow">Overview</p>
        <p className="text-body flywheel__paragraph">
          I spent over five years at Flywheel working on Commerce Cloud, a
          B2B platform that helps brands and retailers manage their commerce
          operations. My work sat at the intersection of product,
          engineering, and operations, where I spent a lot of time
          understanding customer problems, investigating technical issues,
          and working with engineers to improve the platform.
        </p>
      </section>

      <section className="flywheel__section">
        <ol className="flywheel-projects">
          {projects.map((project) => (
            <li className="flywheel-project" key={project.title}>
              <div className="flywheel-project__heading">
                <PixelPointingHand className="flywheel-project__icon" />
                <h2 className="text-heading flywheel-project__title">
                  {project.title}
                </h2>
              </div>
              {project.paragraphs.map((paragraph) => (
                <p className="text-body flywheel-project__description" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </section>

      <section className="flywheel__links">
        <Button to="/">← Back to Work</Button>
      </section>
    </div>
  );
}
