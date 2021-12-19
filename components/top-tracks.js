import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <div key={track.title} className="s-list">
            <img className="s-list-img" src={track.imageUrl} alt="" />
            <p className="s-list-text">
              <a
                className="spotify-link"
                href={track.songUrl}
                key={track.songUrl}
              >
                {track.title}
              </a>
              <br />
              <span>{track.artist}</span>
            </p>
          </div>
        ))}
      </>
    );
  }
  return <div className="p-5 border rounded-xl"></div>;
}
