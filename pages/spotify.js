import Base from "../components/Base";
import NowPlaying from "../components/now-playing";
import TopTracks from "../components/top-tracks";

export default function Spotify() {
  return (
    <>
      <h1>Favourites</h1>
      <p>
        Straight from{" "}
        <a href="https://open.spotify.com/user/31wko7pz4vhcmx6rftimndpomdqm">
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
