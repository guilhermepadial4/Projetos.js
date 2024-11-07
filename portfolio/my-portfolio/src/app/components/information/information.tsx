import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

import Image from "next/image";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages__info">
        <span>
          <Image src="/flag-us.svg" alt="Flag USA" width={20} height={20} priority /> EN Fluent
        </span>
        <span>
          <Image src="/flag-br.svg" alt="Flag Brazil" width={20} height={20} priority /> PT-BR Native Speaker
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
