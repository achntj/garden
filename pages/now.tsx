import Collection from "components/Collection";
import Container from "components/Container";

export default function Now() {
  const reading = [
    { name: "The Da Vinci Code", author: "Dan Brown", status: true },
    { name: "Resilient Web Design", author: "Jeremy Keith", status: true },
    { name: "Crafting Interpreters", author: "Robert Nystrom", status: false },
    { name: "Lean In", author: "Satya Nadela", status: false },
    { name: "Alibaba", author: "Duncan Clark", status: false },
    { name: "Eloquent JavaScript", author: "Marijn Haverbeke", status: false },
    {
      name: "The Algorithm Design Manual",
      author: "Steven S. Skiena",
      status: false,
    },
  ];
  const watching = [
    { name: "Stranger Things", status: true },
    { name: "One Piece", status: false },
    { name: "HIMYM", status: false },
    { name: "TVD", status: false },
  ];
  return (
    <Container
      title="Now"
      description="Everything I'm learning / doing at the moment."
    >
      <div>
        <h1 className="mb-0">Now</h1>
        <p className="text-sm">Updated August 3rd, 2022</p>
        <p>Everything I{"'"}m learning / doing at the moment.</p>
        <p>
          As of now, I've completely stopped working on SentiMate as I'm
          starting afresh with college. I'm mostly working on personal tools,
          specifically my note management system &mdash;
          <a
            href="https://pandoras-box.vercel.app"
            rel="noreferrer"
            target="_blank"
          >
            Pandora
          </a>
          .
        </p>
        <div className="flex space-x-4">
          <div className="flex space-x-1 items-center">
            <div className="w-2 h-2 bg-green-500"></div>
            <span>Complete</span>
          </div>
          <div className="flex space-x-1 items-center">
            <div className="w-2 h-2 bg-red-500"></div>
            <span>Incomplete</span>
          </div>
        </div>
        <Collection collection={reading} header="Reading" highlight={true} />
        {/* <Collection collection={watching} header="Watching" highlight={true} /> */}
      </div>
    </Container>
  );
}
