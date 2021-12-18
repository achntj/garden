import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <div key={track.title} className="s-list">
            <div className="s-list-img">
              <img src={track.imageUrl} alt="" />
            </div>
            <div className="s-list-text">
              <a
                className="spotify-link"
                href={track.songUrl}
                key={track.songUrl}
              >
                <p>{track.title}</p>
              </a>
              <p> - {track.artist}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  return <div className="p-5 border rounded-xl"></div>;
}
