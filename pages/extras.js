import Base from "../components/Base";
import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Extras() {
  const extras = [
    {
      image: "taekwondo",
      alt: "Black Belt Certification",
      desc: "World Taekwondo - Taekwondo Black Belt Dan 1",
      width: 423.63,
      height: 600,
    },
    {
      image: "guitar",
      alt: "Guitar Grade 5 Certification",
      desc: "Trinity College London - Guitar Grade 5",
      width: 424.17,
      height: 600,
    },
    {
      image: "sakura",
      alt: "Sakura Science Program",
      desc: "Sakura Science Program, Japan - Robotics",
      width: 668,
      height: 478.5,
    },
    {
      image: "nasa",
      alt: "NASA Space Apps Challenge",
      desc: "NASA Space Apps Challenge - Global Nominee",
      width: 668,
      height: 485.81,
    },
  ];
  const [isLoading, setLoading] = useState(true);
  return (
    <div>
      <h1>
        Extras
        {/* <p className="text-xs font-normal">flex</p> */}
      </h1>
      <p>
        Apart from programming, I spend quite a bit of time in my other
        pursuits, which majorly include Taekwondo and Guitar. So here{"'"}s a
        small collection of a few major-certificates from the past year.
      </p>
      <div className="entry">
        {extras.map((extra) => (
          <div className="text-center extra" key={extra.image}>
            <Image
              alt={extra.alt}
              src={`/images/${extra.image}.jpeg`}
              width={extra.width}
              height={extra.height}
              className={cn(
                "duration-1000 ease-in-out",
                isLoading
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              onLoadingComplete={() => setLoading(false)}
            />
            <em className="block m-5 text-[#666]">{extra.desc}</em>
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
