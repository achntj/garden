import Base from "../components/Base";
import Link from "next/link";

export default function Extras() {
  const extras = [
    {
      image: "taekwondo",
      alt: "Black Belt Certification",
      desc: "World Taekwondo - Taekwondo Black Belt Dan 1",
    },
    {
      image: "guitar",
      alt: "Guitar Grade 5 Certification",
      desc: "Trinity College London - Guitar Grade 5",
    },
    {
      image: "sakura",
      alt: "Sakura Science Program",
      desc: "Sakura Science Program, Japan - Robotics",
    },
    {
      image: "nasa",
      alt: "NASA Space Apps Challenge",
      desc: "NASA Space Apps Challenge - Global Nominee",
    },
  ];
  return (
    <div>
      <h1>
        Extras
        <p className="text-xs font-normal">flex</p>
      </h1>
      <p>
        Apart from programming, I spend quite a bit of time in my other
        pursuits, which majorly include Taekwondo and Guitar. So here{"'"}s a
        super small collection of a few major certificates from the past year.
      </p>
      <div className="entry">
        {extras.map((extra) => (
          <div key={extra.image}>
            <img
              className="rounded max-h-[600px] mt-[10px] mb-5"
              src={`images/${extra.image}.jpeg`}
              alt={extra.alt}
            />
            <em>{extra.desc}</em>
          </div>
        ))}
      </div>
    </div>
  );
}

Extras.getLayout = function getLayout(page) {
  return (
    <Base
      title="Extras"
      description="My other pursuits that form a big part of my life."
    >
      {page}
    </Base>
  );
};
