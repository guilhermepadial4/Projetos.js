
import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container__main">
      <Header />
      <Experience />

      

      <div className="buttons">
        <div className="social"></div>

        <button>contact me</button>
      </div>
    </main>
  );
}
