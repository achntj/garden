export default function Collection({ collection, header, highlight }) {
  return (
    <div className="my-5">
      <h1 className="mb-0">{header}</h1>
      <div className="ml-5">
        {collection.map((item) => (
          <div key={item.name} className="flex justify-between items-center">
            <p
              title={highlight && item.status ? "Complete" : "Incomplete"}
              className={
                highlight &&
                `underline underline-offset-4 decoration-2 ${
                  item.status ? "decoration-green-500" : "decoration-red-500"
                }`
              }
            >
              {item.name} {item.author && `— ${item.author}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
