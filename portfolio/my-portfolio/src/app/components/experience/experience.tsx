import { SectionTitle } from "../sectionTitle/section-title";
import Image from "next/image";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure quidem eos magni repellat voluptatum</p>

      <div className="experience__time">
        <div className="experience__languages">
          <Image src="/react2.svg" alt="React logo" width={45} height={45} priority />
          <div className="experience__unit">
            <div className="experience__measure measure-2">
              <span>2 years</span>
            </div>
          </div>
        </div>

        <div className="experience__languages">
          <Image src="/js.svg" alt="Javascriot logo" width={40} height={40} priority />
          <div className="experience__unit">
            <div className="experience__measure measure-3">
            <span>3 years</span>
            </div>
          </div>
        </div>

        <div className="experience__languages">
          <Image src="/ts.svg" alt="Javascriot logo" width={40} height={40} priority />
          <div className="experience__unit">
            <div className="experience__measure measure-1">
            <span>1 year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
