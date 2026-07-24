import { AboutMe, Skills, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects isHomePage={true} />
    </main>
  );
}
