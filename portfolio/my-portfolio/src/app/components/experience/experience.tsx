import { SectionTitle } from "../sectionTitle/section-title";
import Image from "next/image";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="experience" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure quidem eos magni repellat voluptatum</p>

      <div className="experience-time">
        <div className="experience__languages">
          <Image src="/react.png" alt="React logo" width={40} height={40} priority />
          <div className="experience__unit">
            <div className="experience__measure"></div>
          </div>

          <Image src="/js.png" alt="Javascriot logo" width={40} height={40} priority />
          <div className="experience__unit">
            <div className="experience__measure"></div>
          </div>

          <Image src="/ts.png" alt="Typescript logo" width={40} height={40} priority />
          <div className="experience__unit">
            <div className="experience__measure"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
