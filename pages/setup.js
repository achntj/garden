import Base from "../components/Base";

export default function Setup() {
  return (
    <div>
      <h1>Dev Setup & Toolkit</h1>
      <p>A not so comprehensive list of software / tools I use.</p>
      <h2>OS</h2>
      <p>MacOS</p>
      <h2>Shell</h2>
      <p>
        ZSH - Insanely fast, no frameworks, epic functionality. Find my zsh
        config <a href="https://github.com/achintyajha/zsh">here</a>. Inspired
        by{" "}
        <a href="https://github.com/Mach-OS/Machfiles">Christian Chiarulli</a>.
      </p>
      <h2>Text Editor</h2>
      <p>
        VS Code & vim (not together). Here{"'"}s my{" "}
        <a href="https://github.com/achintyajha/vim">Vim Config</a>
      </p>
      <h2>Command Line</h2>
      <p>Default MacOS Terminal</p>
      <h2>Web Stack</h2>
      <p>Next.js, Prisma, Postgres, Vercel, Tailwind CSS</p>
      <h2>Other Software</h2>
      <p>Brave, Notion, Spotify, Anki (for language learning decks)</p>
      <h2>Scripting</h2>
      <p>Python, Shell Scripts (sh, bash)</p>
    </div>
  );
}

Setup.getLayout = function getLayout(page) {
  return (
    <Base title="Setup" description="My development setup.">
      {page}
    </Base>
  );
};
