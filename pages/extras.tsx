import ImageComp from "../components/ImageComp";
import { motion } from "framer-motion";
import PageIntro from "../components/PageIntro";
import Container from "components/Container";

export default function Extras() {
  const extras = [
    {
      image: "taekwondo.jpeg",
      alt: "Black Belt Certification",
      desc: "World Taekwondo - Taekwondo Black Belt Dan 1",
      width: 423.63,
      height: 600,
    },
    {
      image: "guitar.jpeg",
      alt: "Guitar Grade 5 Certification",
      desc: "Trinity College London - Guitar Grade 5",
      width: 424.17,
      height: 600,
    },
    {
      image: "sakura.jpeg",
      alt: "Sakura Science Program",
      desc: "Sakura Science Program, Japan - Robotics",
      width: 668,
      height: 478.5,
    },
    {
      image: "nasa.jpeg",
      alt: "NASA Space Apps Challenge",
      desc: "NASA Space Apps Challenge - Global Nominee",
      width: 668,
      height: 485.81,
    },
  ];
  return (
    <Container
      title="Extras"
      description="My other pursuits that form a big part of my life."
    >
      <div>
        <PageIntro header="Extras" darkTo="dark:to-orange-500">
          {/* */}
        </PageIntro>
        <p>
          Apart from programming, I spend quite a bit of time in my other
          pursuits &mdash; Taekwondo and Guitar. So here{"'"}s a small
          collection of a few certificates from the past year.
        </p>
        {extras.map((extra) => (
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            key={extra.image}
          >
            <ImageComp {...extra} />
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
