import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
import { ContactIcon } from "./components/icons/contact-icon";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container__main">
      <Header />
      <Experience />
      <Info />

      <div className="buttons">
        <SocialBtns />

        <a className="btn__primary" href="mailto:test@email.com">
          contact me <ContactIcon />
        </a>
      </div>
    </main>
  );
}
