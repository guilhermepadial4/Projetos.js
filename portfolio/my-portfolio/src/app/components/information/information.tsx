import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

import Image from "next/image";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages__info">
        <span>
          <Image src="/flag-usa.svg" alt="Flag USA" width={30} height={38} priority /> - EN Fluent
        </span>
        <span>
          <Image src="/flag-brazil.svg" alt="Flag Brazil" width={30} height={38} priority /> - PT-BR Native Speaker
        </span>
      </div>

      <SectionTitle text="Education" />
      <div className="education-info">
        <span>🎓</span>
        <span>Análise e Desenvolvimento de Sistemas - Faculdade das Americas - FMU</span>
      </div>
    </div>
  );
}
