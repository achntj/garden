import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <div
            key={track.title}
            className="bg-gray-100 mt-5 rounded p-4 flex not-prose hover:bg-gray-200 text-base"
          >
            <img className="w-16 h-16 rounded" src={track.imageUrl} alt="" />
            <p className="ml-5">
              <a href={track.songUrl} key={track.songUrl}>
                <p className="text-accent">{track.title}</p>
              </a>
              <span>{track.artist}</span>
            </p>
          </div>
        ))}
      </>
    );
  }
  return <div className="p-5 border rounded-xl"></div>;
}
