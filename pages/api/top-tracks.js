import { getTopTracks } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 3).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[1].url,
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};
