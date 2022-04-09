import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <a href={track.songUrl} key={track.songUrl}>
            <div
              key={track.title}
              className="mt-5 rounded p-4 flex not-prose text-base font-normal transition hover:bg-purple-100"
            >
              <img className="w-16 h-16 rounded" src={track.imageUrl} alt="" />
              <p className="ml-5 overflow-scroll whitespace-nowrap">
                <p>{track.title}</p>
                <span className="text-gray-700">{track.artist}</span>
              </p>
            </div>
          </a>
        ))}
      </>
    );
  }
  return <div className="p-5 border rounded-xl"></div>;
}
