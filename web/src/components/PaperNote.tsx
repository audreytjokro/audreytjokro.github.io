import type { CSSProperties } from "react";
import binderClip from "../assets/pocket-shades/binder-clip.webp";
import "./PaperNote.css";

type PaperNoteProps = {
  title: string;
  description: string;
  color: string;
  rotation: number;
};

export default function PaperNote({
  title,
  description,
  color,
  rotation,
}: PaperNoteProps) {
  return (
    <div
      className="paper-note"
      style={
        {
          backgroundColor: color,
          "--paper-rotation": `${rotation}deg`,
        } as CSSProperties
      }
    >
      <img
        src={binderClip}
        alt=""
        aria-hidden="true"
        className="paper-note__clip"
      />
      <p className="paper-note__title">{title}</p>
      <div className="paper-note__divider" />
      <p className="text-caption paper-note__description">{description}</p>
    </div>
  );
}
