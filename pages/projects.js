import Base from "../components/Base";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Of the many projects I have created, here are a few, which could make it
        till here. For the others, check them out at{" "}
        <a href="https://github.com/achintyajha">Github</a>
      </p>
      <p>
        <strong>
          <a href="https://sentimate.ml/">SentiMate</a>
        </strong>{" "}
        A Natural Language Processing and Machine Learning based model that is
        capable of using text for identifying depression.
      </p>
      <p>
        <strong>
          <a href="https://talk.sentimate.ml/">StuClan</a>
        </strong>{" "}
        A web based micro-blogging app primarily built for helping out people
        solve problems relating to mental health and stress.
      </p>
      <p>
        <strong>
          <a href="https://climate-crew.ml/">Climate Crew</a>
        </strong>{" "}
        The idea is to spread knowledge and awareness about Climate through
        storytelling. I have developed this website, where our team has posted
        self-authored unique stories that provide a historical as well as
        mythological perspective to Climate.
      </p>
      <p>
        <strong>
          <a href="https://www.youtube.com/watch?v=wyFxc-_l1jQ">Auto SNAKE</a>
        </strong>{" "}
        A reinforcement learning model that uses Deep Q-Learning to learn to
        play &#39;Snake&#39;. The attached link is a video that shows a
        demonstration of the learning process.
      </p>
      <p>
        <strong>
          <a href="https://achintyajha.in/weather.github.io">Weather</a>
        </strong>{" "}
        A simple weather app made using the weather API.
      </p>
    </div>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Base>{page}</Base>;
};
