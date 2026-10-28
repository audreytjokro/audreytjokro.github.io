import "./Timeline.css";

type TimelineStep = {
  label: string;
  description: string;
};

type TimelineProps = {
  steps: TimelineStep[];
};

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="timeline">
      {steps.map((step) => (
        <div className="timeline-step" key={step.label}>
          <span className="timeline-step__dot" aria-hidden="true" />
          <p className="text-caption-2 timeline-step__label">{step.label}</p>
          <p className="text-caption timeline-step__description">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
