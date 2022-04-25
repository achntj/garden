import HeadContainer from "../components/HeadContainer";
import TopTracks from "../components/top-tracks";

export default function Spotify() {
  return (
    <>
      <HeadContainer
        title="Spotify"
        description="My favourite songs listed at one place. Updated Live."
      >
        <h1>Favourites</h1>
        <p>
          Straight from{" "}
          <a href="https://open.spotify.com/user/1r6wxfc5wa72s61y2k92m8tsb">
            my Spotify account
          </a>
          .
        </p>
        <TopTracks />
      </HeadContainer>
    </>
  );
}
