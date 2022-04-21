import Base from "../components/Base";
import TopTracks from "../components/top-tracks";

export default function Spotify() {
  return (
    <>
      <h1>Favourites</h1>
      <p>
        Straight from{" "}
        <a href="https://open.spotify.com/user/1r6wxfc5wa72s61y2k92m8tsb">
          my Spotify account
        </a>
        .
      </p>
      <TopTracks />
    </>
  );
}

Spotify.getLayout = function getLayout(page) {
  return <Base title="Spotify">{page}</Base>;
};
