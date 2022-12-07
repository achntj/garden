import HeadContainer from "./HeadContainer";

export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />
      <div className="flex flex-col sm:ml-56 px-8 sm:px-0 min-h-screen max-h-screen overflow-y-auto">
        <div className="sm:overflow-scroll text-gray-700 prose flex-grow dark:text-[#a0a0a0] prose-p:font-body sm:m-8 sm:p-4 sm:rounded-lg sm:dark:bg-neutral-900 sm:bg-white sm:bg-opacity-0 dark:bg-opacity-100 sm:backdrop-blur-lg">
          <div className="max-w-[700px] mx-auto sm:pt-10">{children}</div>
        </div>
      </div>
    </>
  );
}
