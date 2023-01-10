import Container from "components/Container";

export default function Design() {
  const sites = [
    { name: "Chase McCoy", link: "https://chasem.co/" },
    { name: "Kabir Goel", link: "https://kabirgoel.com/" },
    { name: "Jacky Zhao", link: "https://jzhao.xyz/" },
    { name: "Linus Lee", link: "https://thesephist.com/" },
    { name: "Arhaan Bahadur", link: "https://arhaanbahadur.co/" },
    { name: "Lee Robinson", link: "https://leerob.io/" },
    { name: "Jesse Zhou", link: "https://jesse-zhou.com/" },
  ];
  return (
    <Container
      title="Design"
      description="Websites that have shaped my ideas on design and the web."
    >
      <div>
        <h1 className="mb-0">Design</h1>
        <p>Websites that have shaped my ideas on design and the web.</p>
      </div>
      {sites.map((site) => (
        <div key={site.name}>
          <a href={site.link} target="_blank" rel="noreferrer">
            {site.name}
          </a>
          <svg
            className="inline-block ml-2 text-base"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="17" y1="7" x2="7" y2="17" />
            <polyline points="8 7 17 7 17 16" />
          </svg>
        </div>
      ))}
    </Container>
  );
}
