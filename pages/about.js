import Base from "../components/Base";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        I am a high school senior at Ahlcon International School, studying
        Computer Science. I am currently working as an Artificial Intelligence
        intern at{" "}
        <a href="https://www.techmahindra.com/en-in/innovation/makers-lab/">
          Tech Mahindra
        </a>
        , where I{"'"}m mostly working on Natural Language Processing.
      </p>
      <p>
        Previously, I have worked as a data science intern under Mr. Savio
        Fernandes, at Walmart Labs India. I am also working on creating a
        machine learning based{" "}
        <a href="https://sentimate.org">natural language tool</a>, which is
        entirely implemented in Python.
      </p>
      <p>
        You can find some of my other side projects{" "}
        <Link href="/projects">here</Link> and the others at my{" "}
        <a href="https://github.com/achintyajha">Github</a> profile. Apart from
        programming, I have been doing some other stuff- primarily Taekwondo,
        music, and writing.
      </p>
      <p>
        Feel free to reach out if you wish to collaborate on something.
        <br />
        achintya [at] achintyajha [dot] com.
      </p>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <Base
      title="About"
      description="About Achintya Jha, a high school senior at Ahlcon International School, studying Computer Science."
    >
      {page}
    </Base>
  );
};
