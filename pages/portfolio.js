import Base from "../components/Base";

export default function Portfolio() {
  const projects = [
    {
      name: "SentiMate",
      url: "https://sentimate.org",
      desc: "A Natural Language Processing and Machine Learning based model that is capable of using text for identifying depression.",
      color: "#7b61ff",
      stack: "Flask, SciKit Learn, Pandas, SCSS, & Jekyll",
      github: "https://github.com/achintyajha/sentimate",
    },
    {
      name: "Dynote",
      url: "https://dynote.vercel.app/",
      desc: "A No-Code Notes app that allows you to take notes in the browser rather than the code-editor.",
      color: "#7b61ff",
      stack: "Next.JS, TypeScript, PostGres, Prisma, & TailwindCSS",
      github: "https://github.com/achintyajha/dynote",
    },
    {
      name: "StuClan",
      url: "https://talk.sentimate.org",
      desc: "A web based micro-blogging app primarily designed for helping out people solve problems relating to mental health and educational-stress.",
      color: "#7b61ff",
      stack: "React, Firebase",
    },
    {
      name: "Wordle Clone",
      desc: "A clone of the popular game Wordle, written in python.",
      color: "#7b61ff",
      stack: "Python, Flask",
      github: "https://github.com/achintyajha/wordle",
    },
    {
      name: "Climate Crew",
      url: "https://climate-crew.ml/",
      desc: "The idea is to spread knowledge and awareness about Climate through storytelling. I have developed this website, where our team has posted self-authored unique stories that provide a historical as well as mythological perspective to Climate.",
      color: "#7b61ff",
      stack: "Hugo, Golang, HTML, SCSS",
      github: "https://github.com/achintyajha/climate-crew-website",
    },
    {
      name: "Crypto Status",
      url: "https://react-crypto-status.vercel.app",
      desc: "A single-page, live cryptocurrency analyser with coin search.",
      color: "#7b61ff",
      stack: "React, CoinGecko API",
      github: "https://github.com/achintyajha/react-crypto-status/",
    },
    {
      name: "Auto SNAKE",
      url: "https://www.youtube.com/watch?v=wyFxc-_l1jQ",
      desc: "A reinforcement learning model that uses Deep Q-Learning to learn to play 'Snake'. The attached link is a video that shows a demonstration of the learning process.",
      color: "#7b61ff",
      stack: "Python, Pytorch, PyGame",
    },
    {
      name: "Weather",
      url: "https://achintyajha.github.io/weather.github.io/",
      desc: " A simple weather app made using the weather API.",
      color: "#7b61ff",
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
        <div
          className={`bg-gray-300 opacity-80 p-1 px-2 my-2 rounded-md hover:opacity-100`}
          key={project.name}
        >
          <h3>{project.name}</h3>
          {project.github && <a href={project.github}>Source Code</a>}
          <p className="text-rose-500">{project.stack}</p>
          <p>{project.desc}</p>
          {project.url && <a href={project.url}>Visit</a>}
        </div>
      ))}
    </div>
  );
}

Portfolio.getLayout = function getLayout(page) {
  return (
    <Base
      title="Projects"
      description="A curated list of select projects that I have created over the years."
    >
      {page}
    </Base>
  );
};
