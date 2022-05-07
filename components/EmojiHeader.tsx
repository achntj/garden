export default function EmojiHeader({ emoji }) {
  return <>{emoji && <p className="text-5xl mt-0 mb-5">{emoji}</p>}</>;
}
