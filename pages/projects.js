import Base from "../components/Base";

export default function Projects() {
  const projects = [
    {
      name: "SentiMate",
      url: "https://sentimate.org",
      desc: "A Natural Language Processing and Machine Learning based model that is capable of using text for identifying depression.",
      color: "#7b61ff",
      stack: "Flask, SciKit Learn, Pandas, SCSS, & Jekyll",
    },
    {
      name: "Dynote",
      url: "https://dynote.vercel.app/",
      desc: "A No-Code Notes app that allows you to take notes in the browser rather than the code-editor.",
      color: "#f24822",
      stack: "Next.JS, TypeScript, PostGres, Prisma, & TailwindCSS",
    },
    {
      name: "StuClan",
      url: "https://talk.sentimate.org",
      desc: "A web based micro-blogging app primarily designed for helping out people solve problems relating to mental health and educational-stress.",
      color: "#18a0fb",
      stack: "React, Firebase",
    },
    {
      name: "Wordle Clone",
      desc: "A (not nearly as interactive) clone of the popular game Wordle, written in python.",
      color: "#1bc47d",
      stack: "Python, Flask",
      url: "https://wordle-python.up.railway.app/",
    },
    {
      name: "Climate Crew",
      url: "https://climate-crew.ml/",
      desc: `[National Winner - NASA Space Apps 2020]\nThis website, features self-authored unique stories, from our team, that provide a historical as well as mythological perspective to Climate.`,
      color: "#f97f0f",
      stack: "Hugo, Golang, HTML, SCSS",
    },
    {
      name: "Crypto Status",
      url: "https://react-crypto-status.vercel.app",
      desc: "A live cryptocurrency analyser with coin based search.",
      color: "#00b5ce",
      stack: "React, CoinGecko API",
    },
    {
      name: "Auto SNAKE",
      url: "https://www.youtube.com/watch?v=wyFxc-_l1jQ",
      desc: "A reinforcement learning model that uses Deep Q-Learning to learn to play 'Snake'.",
      color: "#ee46d3",
      stack: "Python, Pytorch, PyGame",
    },
  ];
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Check out my other projects at{" "}
        <a href="https://github.com/achintyajha">Github</a>.
      </p>
      {projects.map(
        (project) =>
          project.url && (
            <a href={project.url}>
              <div
                className="min-h-[220px] flex flex-col justify-between p-5 my-2 rounded-[40px] mb-8 group"
                style={{ backgroundColor: `${project.color}` }}
                key={project.name}
              >
                <h3 className="text-white">{project.name}</h3>
                {/* <p className="text-rose-500">{project.stack}</p> */}
                <p className="text-gray-50 font-normal whitespace-pre-line">
                  {project.desc}
                </p>
                <div
                  className="text-3xl p-2 text-white w-fit grid"
                  style={{ clipPath: "inset(0 0 0 0 )" }}
                >
                  <div className="[grid-area:1/1] flex items-center justify-center h-10 w-10 transition ease-in-out group-hover:delay-200 translate-y-10 -translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0">
                    ↗
                  </div>
                  <div className="[grid-area:1/1] flex items-center justify-center h-10 w-10 transition ease-in-out delay-200 group-hover:delay-[0s] duration-300 group-hover:-translate-y-10 group-hover:translate-x-10">
                    ↗
                  </div>
                </div>
              </div>
            </a>
          )
      )}
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
