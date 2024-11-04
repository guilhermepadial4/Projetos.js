import "./section-title.scss";

interface SectionTitleProps {
  text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
  return <h3 className="section__title">{text}</h3>;
}
