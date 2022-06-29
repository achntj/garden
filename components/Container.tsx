import HeadContainer from "./HeadContainer";

export default function Container({ children, ...pageProps }) {
  return (
    <>
      <HeadContainer
        title={pageProps.title}
        description={pageProps.description}
        image={pageProps.image}
      />
      <div className="flex flex-col sm:ml-56 min-h-screen px-8 sm:px-4 overflow-y-auto max-h-screen">
        <div className="text-gray-700 prose flex-grow dark:text-[#a0a0a0] prose-p:font-body">
          <div className="max-w-[700px] mx-auto pt-10 pb-20 sm:pt-20">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
