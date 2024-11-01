import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i'm Guilherme</h1>
        <h2>FrontEnd Developer</h2>
      </div>
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
    </div>
  );
}
