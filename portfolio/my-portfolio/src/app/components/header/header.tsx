import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i'm Guilherme 👋</h1>
        <h2>FrontEnd Developer</h2>
      </div>
      <Image src="/me.jpg" alt="Picture" width={325} height={277} priority />
    </div>
  );
}
