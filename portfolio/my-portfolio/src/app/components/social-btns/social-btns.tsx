import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { GithubIcon } from "../icons/github-icon";
import { XIcon } from "../icons/x-icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <InstaIcon />
      </a>
      <a href="">
        <LinkedinIcon />
      </a>
      <a href="">
        <GithubIcon />
      </a>
      <a href="">
        <XIcon />
      </a>
    </div>
  );
}
