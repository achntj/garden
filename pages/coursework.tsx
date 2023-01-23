import Container from "components/Container";

export default function Uses() {
  return (
    <Container title="Uses" description="My development setup.">
      <div>
        <h1>Coursework</h1>
        <p>A list of courses I{"'"}m currently taking.</p>
        <h3>Fall 22</h3>
        <ul className="marker:text-black dark:marker:text-white">
          <li>CSE 110: Principles of Programming</li>
          <li>FSE 100: Introduction to Engineering</li>
          <li>MAT 265: Calculus for Engineers I</li>
          <li>TCL 275: Culture, Language & Learning</li>
          <li>ENG 107: First-Year Composition</li>
        </ul>
        <h3>Spring 23</h3>
        <ul className="marker:text-black dark:marker:text-white">
          <li>CSE 205: Object-Oriented Programming and Data Structures</li>
          <li>MAT 266: Calculus for Engineers II</li>
          <li>ENG 102: First Year Composition</li>
          <li>REL 101: Religion, Culture, Public Life</li>
          <li>SOS 182: Water Planet</li>
          <li>SOC 352: Social Change</li>
        </ul>
      </div>
    </Container>
  );
}
