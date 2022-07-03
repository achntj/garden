import Container from "components/Container";

export default function Now() {
  const books = [
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
  return (
    <Container
      title="Now"
      description="Everything I'm learning / doing at the moment."
    >
      <div>
        <h1 className="mb-0">Now</h1>
        <p className="text-sm">Updated June 10th, 2022</p>
        <p>Everything I{"'"}m learning / doing at the moment.</p>
        <h1 className="mb-0">Reading List</h1>
        <div className="ml-5">
          {books.map((book) => (
            <div key={book.name} className="flex justify-between items-center">
              <p
                title={book.status ? "Complete" : "Reading"}
                className={`underline underline-offset-4 decoration-2 ${
                  book.status ? "decoration-green-500" : "decoration-red-500"
                }`}
              >
                {book.name} &mdash; {book.author}
              </p>
            </div>
          ))}
        </div>
        <h1>Side Pursuits</h1>
        <div className="ml-5">
          <p>
            <li>Spanish</li>
            <li>Arpegios + Math Rock (Guitar)</li>
          </p>
        </div>
      </div>
    </Container>
  );
}
