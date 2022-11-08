import Container from "components/Container";

export default function Uses() {
  return (
    <Container title="Uses" description="My development setup.">
      <div>
        <h1>Coursework</h1>
        <p>A list of courses I{"'"}m currently taking.</p>
        <h3>Fall 22</h3>
        <ul>
          <li>CSE 110: Principles of Programming</li>
          <li>FSE 100: Introduction to Engineering</li>
          <li>MAT 265: Calculus for Engineers I</li>
          <li>TCL 275: Culture, Language & Learning</li>
          <li>ENG 107: First-Year Composition</li>
        </ul>
      </div>
    </Container>
  );
}
