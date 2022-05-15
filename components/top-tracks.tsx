import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { TopTracks } from "../lib/types";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (data) {
    return (
      <>
        {data.tracks.map((track) => (
          <a
            target="_blank"
            rel="noreferrer"
            className="border-none"
            href={track.songUrl}
            key={track.songUrl}
          >
            <div
              key={track.title}
              className="mt-5 rounded p-4 flex not-prose text-base font-normal transition hover:shadow-md border-none"
            >
              <img className="w-16 h-16 rounded" src={track.imageUrl} alt="" />
              <div className="ml-5 overflow-scroll whitespace-nowrap">
                <p>{track.title}</p>
                <p className="text-gray-700 dark:text-zinc-400">
                  {track.artist}
                </p>
              </div>
            </div>
          </a>
        ))}
      </>
    );
  }
  return (
    <div className="p-5 border dark:border-zinc-700 rounded-xl">
      <div className="w-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 ml-1 animate-spin opacity-80"
        >
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
        </svg>
      </div>
    </div>
  );
}
