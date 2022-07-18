import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { TopTracks } from "../lib/types";
import Loading from "./Loading";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (data) {
    return (
      <div className="not-prose">
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
              className="mt-5 rounded p-4 flex text-base font-normal hover:dark:bg-neutral-900 hover:bg-white hover:shadow-md border-none"
            >
              <img className="w-16 h-16 rounded" src={track.imageUrl} alt="" />
              <div className="ml-5 overflow-scroll whitespace-nowrap">
                <p className="text-zinc-800 dark:text-zinc-300">
                  {track.title}
                </p>
                <p className="text-gray-700 dark:text-zinc-400">
                  {track.artist}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
  return <Loading />;
}
