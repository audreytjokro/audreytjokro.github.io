import ProjectHeader from "../components/ProjectHeader";
import Button from "../components/Button";
import pipelineDiagram from "../assets/red-teaming-clinical-llms/pipeline-diagram.webp";
import "./RedTeamingClinicalLLMs.css";

export default function RedTeamingClinicalLLMs() {
  return (
    <div className="red-teaming">
      <ProjectHeader
        category="Research"
        title="Red-Teaming Clinical LLMs"
        subtitle="How can we make AI systems safer in healthcare?"
        meta={[
          { label: "Project Type", value: "Machine Learning Research" },
          { label: "Course", value: "CS 5788 — Generative Models" },
          { label: "Institution", value: "Cornell Tech" },
          {
            label: "Collaborators",
            value: "Stephen Dong, Niki Karanikola, Audrey Tjokro",
          },
          {
            label: "Technologies & Methods",
            value: "Python · PyTorch · RLHF · PPO · DPO · LLM Evaluation",
          },
        ]}
      />

      <section className="red-teaming__section">
        <img
          src={pipelineDiagram}
          alt="Diagram of the automated red-teaming pipeline: a red-teaming agent runs a 5-turn conversation with the target clinical LLM, which is scored by a judge LLM, across three setups — (a) baseline, (b) PPO policy update, and (c) DPO comparing two conversations to pick a chosen/rejected pair"
          className="red-teaming__diagram"
          loading="lazy"
        />
      </section>

      <section className="red-teaming__section">
        <p className="text-caption-3 red-teaming__eyebrow">Abstract</p>
        <p className="text-body red-teaming__paragraph">
          As large language models become increasingly integrated into
          healthcare, evaluating their safety is especially important. For
          this project, we developed an automated red-teaming framework that
          simulates multi-turn conversations to identify unsafe responses
          from clinical LLMs.
        </p>
        <p className="text-body red-teaming__paragraph">
          We explored two reinforcement learning approaches, Proximal Policy
          Optimization (PPO) and Direct Preference Optimization (DPO), to
          improve the effectiveness of these adversarial simulations.
        </p>
        <p className="text-body red-teaming__paragraph">
          Our best-performing DPO model achieved a 40% attack success rate,
          compared with 15% for the untuned baseline, demonstrating the
          potential of automated red-teaming for evaluating clinical AI
          safety.
        </p>
      </section>

      <section className="red-teaming__section">
        <p className="text-caption-3 red-teaming__eyebrow">
          About This Project
        </p>
        <p className="text-body red-teaming__paragraph">
          This research was completed as our final project for CS 5788:
          Generative Models at Cornell Tech.
        </p>
        <p className="text-body red-teaming__paragraph">
          We were interested in how reinforcement learning could improve
          automated safety testing for clinical language models, particularly
          in realistic, multi-turn conversations.
        </p>
        <p className="text-body red-teaming__paragraph">
          Our work involved building an adversarial testing pipeline,
          experimenting with PPO and DPO, and evaluating how effectively
          these approaches could identify unsafe model behavior.
        </p>
        <Button href="/pdfs/adversarial-clinical-llms.pdf">
          Read the Full Paper ↗
        </Button>
      </section>

      <section className="red-teaming__links">
        <Button to="/">← Back to Work</Button>
      </section>
    </div>
  );
}
