import Base from "../components/Base";

export default function Projects() {
  const projects = [
    {
      name: "SentiMate",
      url: "https://sentimate.ml/",
      desc: "A Natural Language Processing and Machine Learning based model that is capable of using text for identifying depression.",
    },
    {
      name: "StuClan",
      url: "https://talk.sentimate.ml/",
      desc: "A web based micro-blogging app primarily built for helping out people solve problems relating to mental health and stress.",
    },
    {
      name: "Climate Crew",
      url: "https://climate-crew.ml/",
      desc: "The idea is to spread knowledge and awareness about Climate through storytelling. I have developed this website, where our team has posted self-authored unique stories that provide a historical as well as mythological perspective to Climate.",
    },
    {
      name: "Auto SNAKE",
      url: "https://www.youtube.com/watch?v=wyFxc-_l1jQ",
      desc: "A reinforcement learning model that uses Deep Q-Learning to learn to play 'Snake'. The attached link is a video that shows a demonstration of the learning process.",
    },
    {
      name: "Weather",
      url: "https://achintyajha.in/weather.github.io/",
      desc: " A simple weather app made using the weather API.",
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Of the many projects I have created, here are a few, which could make it
        till here. For the others, check them out at{" "}
        <a href="https://github.com/achintyajha">Github</a>
      </p>
      {projects.map((project) => (
        <p>
          <strong>
            <a href={project.url}>{project.name}</a>
          </strong>{" "}
          {project.desc}
        </p>
      ))}
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return (
    <Base
      title="Projects"
      description="A curated list of select projects that I have created over the years."
    >
      {page}
    </Base>
  );
};
