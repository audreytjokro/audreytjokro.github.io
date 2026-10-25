import ProjectHeader from "../components/ProjectHeader";
import ApproachCard from "../components/ApproachCard";
import Button from "../components/Button";
import heroImage from "../assets/smell-and-machine-learning/hero-simulator.webp";
import conceptDiagram from "../assets/smell-and-machine-learning/concept-diagram.webp";
import "./SmellAndMachineLearning.css";

// Set these once the URLs exist — the links stay hidden until then.
const GITHUB_URL: string | undefined = undefined;
const RESEARCH_MATERIALS_URL: string | undefined = undefined;

export default function SmellAndMachineLearning() {
  return (
    <div className="smell-ml">
      <ProjectHeader
        category="Research"
        title="Smell and Machine Learning"
        subtitle="Can we teach machines to smell? And can they figure out where a smell is coming from?"
        meta={[
          { label: "Timeline", value: "Summer 2026" },
          {
            label: "Role & Responsibilities",
            value: [
              "Machine Learning Research",
              "Experimental Design & Data Collection",
              "Model Training & Evaluation",
            ],
          },
          {
            label: "Research Group",
            value: ["Cornell University — Owens Lab", "Andrew Owens & Carl"],
          },
          {
            label: "Technologies",
            value: [
              "Python, PyTorch, Scikit-learn",
              "Cyranose 320 Electronic Nose",
              "Intel RealSense RGB-D, AprilTags",
              "Decision Transformers",
            ],
          },
        ]}
      />

      <section className="smell-ml__section">
        <p className="text-caption-3 smell-ml__eyebrow">Overview</p>
        <p className="text-body smell-ml__paragraph">
          During the summer of 2026, I worked on research exploring how
          machines can detect and locate smells using electronic noses and
          machine learning. We investigated whether sensor measurements could
          help identify different odors, estimate their locations, and guide
          a robot toward an odor source.
        </p>
        <img
          src={heroImage}
          alt="SmellSim — a simulated smell-sensing environment showing a 3D studio apartment with odor plumes, a simulated Cyranose 320 e-nose, live sensor traces, and a 32-sensor raw signal heatmap"
          className="smell-ml__hero-image"
          loading="lazy"
        />
      </section>

      <section className="smell-ml__section">
        <p className="text-heading smell-ml__heading">
          Where Is That Smell Coming From?
        </p>
        <p className="text-body smell-ml__paragraph">
          Imagine walking into a room and smelling coffee. You can recognize
          the smell, but figuring out exactly where it's coming from is much
          harder.
        </p>
        <p className="text-body smell-ml__paragraph">
          Unlike cameras, electronic noses don't directly capture spatial
          information. Odors disperse through the air, and sensors respond
          gradually, making localization a challenging problem.
        </p>
        <figure className="smell-ml__figure">
          <img
            src={conceptDiagram}
            alt="Simulated robot arm control interface — 3D view of the arm with AprilTag markers, alongside joint pose controls used for sampling placement"
            className="smell-ml__concept-image"
            loading="lazy"
          />
          <figcaption className="text-caption smell-ml__caption">
            The goal: use odor measurements collected across space to
            estimate where a smell originates.
          </figcaption>
        </figure>
      </section>

      <section className="smell-ml__section">
        <p className="text-caption-3 smell-ml__eyebrow">
          How We Approached It
        </p>
        <div className="smell-ml__approach-grid">
          <ApproachCard
            emoji="👃"
            title="Sensing"
            description="Collected odor measurements using a Cyranose 320 electronic nose with 32 sensors, capturing how different odors produce distinct response patterns."
          />
          <ApproachCard
            emoji="🧠"
            title="Learning"
            description="Trained machine learning models to recognize odors and estimate their spatial origins using sensor measurements collected at different locations."
          />
          <ApproachCard
            emoji="🗺️"
            title="Exploring"
            description="Investigated learned sampling strategies using a decision transformer to determine where a robot should collect its next odor measurement."
          />
        </div>
      </section>

      <p className="text-caption-3 smell-ml__team">
        The team — Audrey Tjokro, Xuanchen Lu, Yiming Dou, Junbang Liang,
        Andrew Owens, Carl Vondrick
      </p>

      <section className="smell-ml__links">
        <Button to="/">Back to Work</Button>
        {GITHUB_URL && <Button href={GITHUB_URL}>GitHub</Button>}
        {RESEARCH_MATERIALS_URL && (
          <Button href={RESEARCH_MATERIALS_URL}>Research Materials</Button>
        )}
      </section>
    </div>
  );
}
