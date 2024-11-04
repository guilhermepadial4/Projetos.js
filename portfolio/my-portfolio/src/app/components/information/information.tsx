import "information.scss";

import Image from "next/image";

export function Info() {
  return (
    <div className="infos">
      <h3>Languages</h3>
      <div className="languages-info">
        <span>
          <Image src="/flag-usa.svg" alt="Flag USA" width={30} height={38} priority /> - EN Fluent
        </span>
        <span>
          <Image src="/flag-brazil.svg" alt="Flag Brazil" width={30} height={38} priority /> - PT-BR Native Speaker
        </span>
      </div>

      <h3>Education</h3>
      <div className="education-info">
        <span>🎓</span>
        <span>Análise e Desenvolvimento de Sistemas - Faculdade das Americas - FMU</span>
      </div>
    </div>
  );
}
