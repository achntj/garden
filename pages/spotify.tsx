import HeadContainer from "../components/HeadContainer";
import TopTracks from "../components/top-tracks";
import PageIntro from "../components/PageIntro";
import { motion } from "framer-motion";
import NowPlaying from "components/now-playing";

export default function Spotify() {
  return (
    <>
      <HeadContainer
        title="Spotify"
        description="My favourite songs listed at one place. Updated Live."
      >
        <PageIntro header="Listening" darkTo="dark:to-blue-800">
          Straight from{" "}
          <a href="https://open.spotify.com/user/1r6wxfc5wa72s61y2k92m8tsb">
            my Spotify account
          </a>
          .
        </PageIntro>
        <NowPlaying />
        <TopTracks />
      </HeadContainer>
    </>
  );
}
