import TopTracks from "../components/top-tracks";
import PageIntro from "../components/PageIntro";
import NowPlaying from "components/now-playing";
import Container from "components/Container";

export default function Spotify() {
  return (
    <>
      <Container
        title="Spotify"
        description="My favourite songs listed at one place. Updated Live."
      >
        <PageIntro header="Listening" darkTo="dark:to-blue-800">
          Pulled live from{" "}
          <a href="https://open.spotify.com/user/1r6wxfc5wa72s61y2k92m8tsb">
            my Spotify account
          </a>
          .
        </PageIntro>
        <NowPlaying />
        <h3 className="underline underline-offset-4 text-center">
          Monthly Top 10
        </h3>
        <TopTracks />
      </Container>
    </>
  );
}
