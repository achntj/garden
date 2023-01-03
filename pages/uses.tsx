import Container from "components/Container";

export default function Uses() {
  return (
    <Container title="Uses" description="My development setup.">
      <div>
        <h1>Uses</h1>
        <p>A not so comprehensive list of software / tools I use.</p>
        <h2>This website</h2>
        <p>
          React-JavaScript ecosystem &mdash; Next.js, Contentlayer, Tailwind
          CSS, Vercel, SWR.
        </p>
        <h2>Shell</h2>
        <p>
          ZSH - Insanely fast, no frameworks, epic functionality. Find my zsh
          config{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/achntj/zsh"
          >
            here
          </a>
          . Inspired by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mach-OS/Machfiles"
          >
            Christian Chiarulli
          </a>
          .
        </p>
        <h2>Text Editor</h2>
        <p>
          VS Code & vim (not together). Here{"'"}s my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/achntj/vim"
          >
            (N)vim Config
          </a>
        </p>
        <h2>Command Line</h2>
        <p>Default MacOS Terminal (terminal.app)</p>
        <h2>OS</h2>
        <p>MacOS</p>
        <h2>Web Stack</h2>
        <p>Next.js, Prisma, Postgres, Vercel, Tailwind CSS</p>
        <h2>Other Software</h2>
        <p>Brave, Notion, Spotify, Anki (for language learning decks)</p>
        <h2>Scripting</h2>
        <p>Python, Shell Scripts (sh, bash)</p>
      </div>
    </Container>
  );
}
